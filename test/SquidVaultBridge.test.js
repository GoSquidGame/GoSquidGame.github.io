require("dotenv").config({path: "../.env"});
const { ethers } = require("hardhat");
const { expect } = require("chai");

// const nftAddr = 0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f; //mainnet   
const raffleAddr = "0xb109173Ab57Dab7F954Ef8F10D87a5bFDB740EEB"; //mainnet


//////////////////////////////////////// Matic Polygon / Mumbai static contract info
//// approve --> transfer & lock
const erc721PredicateAddress = "0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b"; // goerli
// const erc721PredicateAddress = "0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD"; // mainnet
//// depostFor callee
// const rootChainManagerAddress = '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74'; // goerli
// const rootChainManagerAddress = '0xA0c68C638235ee32657e8f720a23ceC1bFc77C77'; // mainnet

const zeroAccount = '0x0000000000000000000000000000000000000000';

describe("SquidGameVault Bridge", () => {

    let owner, a1, a2, a3, dao;
    let nftInstance, erc20Instance, vaultInstance;

    beforeEach( async () => {
        [owner, a1, a2, a3, dao, bridge] = await hre.ethers.getSigners();

        const SquidGameCard = await ethers.getContractFactory("SquidGameCard");
        nftInstance = await SquidGameCard.deploy();
        await nftInstance.deployed();

        const LeedoCoin = await ethers.getContractFactory("LeedoERC20");
        erc20Instance = await LeedoCoin.deploy(nftInstance.address, raffleAddr);
        await erc20Instance.deployed();
        
        const SquidVault = await ethers.getContractFactory("LeedoNftVault");
        vaultInstance = await SquidVault.deploy(nftInstance.address, erc20Instance.address, bridge.address);
        await vaultInstance.deployed();

        erc20Instance.setNftVaultAddr(vaultInstance.address);
    });

    // owner(a1) sends a staked token to L2
    it("the owner of a staked token approves bridge and bridge transfers the token to itself to lock", async () => {
        let tx = await erc20Instance.mintNftStaking(117000000);
        tx = await nftInstance.connect(a1).claim();
        await tx.wait();

        // NFTContract approve and stake
        tx = await nftInstance.connect(a1).setApprovalForAll(vaultInstance.address, true);
        await tx.wait();
        /// stake
        let tokenId1 = await nftInstance.tokenOfOwnerByIndex(a1.address, 0)
        tx = await vaultInstance.connect(a1).stake([tokenId1]);
        await tx.wait();
        expect(await vaultInstance.ownerOf(tokenId1)).be.equal(a1.address);

        // Deposit
        //// a1 approves bridge for tokenId1
        tx = await vaultInstance.connect(a1).approve(bridge.address, tokenId1);
        await tx.wait()
        expect(await vaultInstance.getApproved(tokenId1)).be.equal(bridge.address);
        //// bridge transfers tokenId1 to itself to lock without setAllowTransfer(true)
        expect(await vaultInstance.ownerOf(tokenId1)).be.equal(a1.address);
        expect(await erc20Instance.balanceOf(a1.address)).be.equal(0);
        tx = await vaultInstance.connect(bridge).transferFrom(a1.address, bridge.address, tokenId1);
        await tx.wait();
        expect(await vaultInstance.ownerOf(tokenId1)).be.equal(bridge.address); // tokenId1 is transferred
        expect(await erc20Instance.balanceOf(a1.address)).be.not.equal(0); // a1 receives rewards
    })

    // owner(a1) withdraw L2 token into vault
    it("bridge exits the locked token, then the owner recevies a token in vault and bridge does not receive rewards", async () => {
        let tx = await erc20Instance.mintNftStaking(117000000);
        tx = await nftInstance.connect(a1).claim(); // mint a token
        await tx.wait();

        // NFTContract approve and stake
        tx = await nftInstance.connect(a1).setApprovalForAll(vaultInstance.address, true);
        await tx.wait();
        // stake
        let tokenId1 = await nftInstance.tokenOfOwnerByIndex(a1.address, 0)
        tx = await vaultInstance.connect(a1).stake([tokenId1]);
        await tx.wait();

        // Deposit into L2
        //// a1 approves bridge for tokenId1
        tx = await vaultInstance.connect(a1).approve(bridge.address, tokenId1);
        await tx.wait()
        //// bridge transfers tokenId1 to itself to lock without setAllowTransfer(true)
        let depositor = a1; // in the bridge contract, the original owner (depositor) is recorded as an owner of tokenId1
        tx = await vaultInstance.connect(bridge).transferFrom(a1.address, bridge.address, tokenId1);
        await tx.wait();
        expect(await vaultInstance.ownerOf(tokenId1)).be.equal(bridge.address); // tokenId1 is transferred and locked

        // Withdraw from L2
        //// bridge transfer the locked token to the original owner's vault account
        expect(await vaultInstance.ownerOf(tokenId1)).be.equal(bridge.address); // tokenId1 is locked by bridge
        tx = await vaultInstance.connect(bridge).transferFrom(bridge.address, depositor.address, tokenId1);
        await tx.wait();
        expect(await vaultInstance.ownerOf(tokenId1)).be.equal(depositor.address); // tokenId1 is exited
        expect(await erc20Instance.balanceOf(bridge.address)).be.equal(0);  // bridge does not receive rewards

        // unstake
        //// depositor(a1) can unstake the token
        tx = await vaultInstance.connect(a1).withdraw([tokenId1]);
        await tx.wait();
        expect(await nftInstance.ownerOf(tokenId1)).be.equal(a1.address); // tokenId1 is transferred
    })
});
