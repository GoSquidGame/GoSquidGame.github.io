require("dotenv").config({path: "../.env"});
const { ethers, network } = require("hardhat");
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

    let owner, a1;
    let nftInstance, erc20Instance, vaultInstance;
    let numOfCards = 132;
    let onetimeClaimLimit = 19;
    let claimBlocksRequired = 20; // 200000 in the real contract
    let tokens = [];

    before( async () => {   // accounts, deploy, add badge tokens
        [owner, a1] = await hre.ethers.getSigners();

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

        let tx;
        for (let i=0; i< numOfCards; i++) {
            tx = await nftInstance.connect(a1).claim();
            tokens.push(await nftInstance.connect(a1).tokenOfOwnerByIndex(a1.address, i))
        }
        await tx.wait();
        // approve
        tx = await nftInstance.connect(a1).setApprovalForAll(vaultInstance.address, true);
        await tx.wait();
        // staking
        tx = await vaultInstance.connect(a1).stake(tokens);
        await tx.wait();
    });

    // a1 mints 100 cards
    // a1 tries claim 21 cards --> 'ERC20: maximum bulk claims is 20 cards per tx'
    // a1 tries claim before claimBlockRequired --> 'ERC20: does not meet claimBlockRequired'
    //   31 days forward
    // a1 tries claim 21 cards --> 'ERC20: maximum bulk claims is 20 cards per tx'
    // a1 runs 5 times of 20 card claims (compare expected rewards and total rewards)


    it("owner cannot claim one-time rewards for more than 20 cards at once", async () => {
        expect(await vaultInstance.balanceOf(a1.address)).is.equal(numOfCards);
        expect(tokens.length).to.be.equal(numOfCards);
        await expect(erc20Instance.connect(a1).claim(tokens.slice(0,onetimeClaimLimit+1))).to.be.revertedWith('ERC20: maximum bulk claims is 20 cards per tx');
    });

    it("owner cannot claim one-time rewards for her cards before claimBlockRequired from staking", async () => {
        await expect(erc20Instance.connect(a1).claim(tokens.slice(0,onetimeClaimLimit))).to.be.revertedWith('ERC20: does not meet claimBlockRequired');
    });

    it("owner can claim one-time rewards up to 20 cards at once after claimBlockRequired from staking and total rewards should be equal to sum of expected rewards for each card calculated by calcRewards", async () => {
        for (let j=0; j<20; j++) {
            await ethers.provider.send('evm_mine');
        }

        let expectedRewards = ethers.BigNumber.from(0);
        for (let i=0; i<tokens.length; i++) {
            expectedRewards.add(await erc20Instance.connect(a1).calcRewards(tokens[i]));
        }

        expect(await erc20Instance.balanceOf(a1.address)).to.be.equal(0);
        for (let i = 0; i<numOfCards; i += onetimeClaimLimit) {
            await erc20Instance.connect(a1).claim(tokens.slice(i,onetimeClaimLimit));
        }
        expect(await erc20Instance.balanceOf(a1.address)).to.be.not.equal(expectedRewards);
    });
});
