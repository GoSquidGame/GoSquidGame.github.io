require("dotenv").config({path: "../.env"});
const { ethers } = require("hardhat");
const { expect } = require("chai");

// const nftAddr = 0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f; //mainnet   
const raffleAddr = "0xb109173Ab57Dab7F954Ef8F10D87a5bFDB740EEB"; //mainnet

//////////////////////////////////////// Matic Polygon / Mumbai static contract info
//// approve --> transfer & lock
const erc721PredicateAddress = '0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b'; // goerli
// const erc721PredicateAddress = "0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD"; // mainnet
//// depostFor callee
// const rootChainManagerAddress = '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74'; // goerli
// const rootChainManagerAddress = '0xA0c68C638235ee32657e8f720a23ceC1bFc77C77'; // mainnet

describe("SquidERC20", () => {

    let owner, dev;
    let nftInstance, erc20Instance, vaultInstance;

    beforeEach( async () => {   // accounts, deploy, add badge tokens
        [owner, dev, dao] = await hre.ethers.getSigners();

        const SquidGameCard = await ethers.getContractFactory("SquidGameCard");
        nftInstance = await SquidGameCard.deploy();
        await nftInstance.deployed();

        const LeedoCoin = await ethers.getContractFactory("LeedoERC20");
        erc20Instance = await LeedoCoin.deploy(nftInstance.address, raffleAddr);
        await erc20Instance.deployed();
        
        const SquidVault = await ethers.getContractFactory("LeedoNftVault");
        vaultInstance = await SquidVault.deploy(nftInstance.address, erc20Instance.address, erc721PredicateAddress);
        await vaultInstance.deployed();

        erc20Instance.setNftVaultAddr(vaultInstance.address);
    });

    it("admin can mint dev budget", async () => {

        let amount = 1000000;

        let tx = await erc20Instance.mintDev(dev.address, amount);
        await tx.wait();
        let balance = ethers.utils.formatUnits(await erc20Instance.balanceOf(dev.address), 18);
        expect(parseInt(balance)).is.equal(amount);
    });

    it("initializeDao cannot be called twice", async () => {
        let tx = await erc20Instance.initializeDao(dao.address);
        await tx.wait();
        await expect(erc20Instance.initializeDao(dao.address)).to.be.revertedWith('ERC20: DAO is already initialized');
    });

    it("setDaoAddr cannot be called prior to initializeDao nor by other than dao", async () => {
        await expect(erc20Instance.setDaoAddr(dao.address)).to.be.revertedWith('ERC20: caller is not the DAO address!');
        let tx = await erc20Instance.initializeDao(dao.address);
        await tx.wait();
        await expect(erc20Instance.setDaoAddr(dao.address)).to.be.revertedWith('ERC20: caller is not the DAO address!');
        await erc20Instance.connect(dao).setDaoAddr(dev.address);
    });

    it("unlockDaoMint cannot be called by other than dao", async () => {
        let tx = await erc20Instance.initializeDao(dao.address);
        await tx.wait();
        await expect(erc20Instance.unlockDaoMint()).to.be.revertedWith('ERC20: caller is not the DAO address!');
        await erc20Instance.connect(dao).unlockDaoMint();
    });

    it("daoMint cannnot be called prior to timeLockDuration nor by other than dao nor more than daoMintableAmount", async () => {
        let tx = await erc20Instance.initializeDao(dao.address);
        tx = await erc20Instance.connect(dao).unlockDaoMint();
        await tx.wait();

        await expect(erc20Instance.connect(dao).daoMint(1000000)).to.be.revertedWith('ERC20: Wait _daoTimelock passes');

        await ethers.provider.send('evm_increaseTime', [24*60*60]);
        // await ethers.provider.send('evm_mine');

        await expect(erc20Instance.connect(dao).daoMint(560000000+1)).to.be.revertedWith('ERC20:  Amount is more than allowed');
        await expect(erc20Instance.daoMint(1000000)).to.be.revertedWith('ERC20: caller is not the DAO address!');

        let amount = 1000000
        tx = await erc20Instance.connect(dao).daoMint(amount);
        await tx.wait();

        let balance = ethers.utils.formatUnits(await erc20Instance.balanceOf(dao.address), 18);
        expect(parseInt(balance)).is.equal(amount);
    });

    // calcRewards
    // claim
});
