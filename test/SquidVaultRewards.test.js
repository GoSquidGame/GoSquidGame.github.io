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

const diff = ethers.BigNumber.from("5194874553201880") // one block rewards per card

describe("SquidGameVault Rewards", () => {

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

    it("claimed rewards are equal to expected ones by calcRewards", async () => {
        let tx = await erc20Instance.mintNftStaking(117000000);
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        await tx.wait();

        // approve
        tx = await nftInstance.connect(a1).setApprovalForAll(vaultInstance.address, true);
        await tx.wait();

        //// staking
        let tokenId0 = await nftInstance.tokenOfOwnerByIndex(a1.address, 0)
        let tokenId1 = await nftInstance.tokenOfOwnerByIndex(a1.address, 1)
        let tokenId2 = await nftInstance.tokenOfOwnerByIndex(a1.address, 2)
        tx = await vaultInstance.connect(a1).stake([tokenId0, tokenId1, tokenId2]);
        await tx.wait();

        await network.provider.send("evm_mine");

        expect(await nftInstance.balanceOf(a1.address)).is.equal(0);
        expect(await vaultInstance.balanceOf(a1.address)).is.equal(3);
        expect(await erc20Instance.balanceOf(a1.address)).is.equal(0);

        let diffs = diff.mul(await vaultInstance.balanceOf(a1.address));
        let expectedRewards = (await vaultInstance.calcRewards(a1.address)).add(diffs); // will be claimed after a block

        tx = await vaultInstance.connect(a1).claimRewards();
        await tx.wait();

        expect(await erc20Instance.balanceOf(a1.address)).is.equal(expectedRewards);
    })

    // stake 2 cards --> stake 1 card --> unstake 2 cards
    it("automatic rewards (on staking or on unstaking) are equal to expected ones by calcRewards", async () => {
        let tx = await erc20Instance.mintNftStaking(117000000);
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        await tx.wait();

        // approve
        tx = await nftInstance.connect(a1).setApprovalForAll(vaultInstance.address, true);
        await tx.wait();

        let tokenId0 = await nftInstance.tokenOfOwnerByIndex(a1.address, 0)
        let tokenId1 = await nftInstance.tokenOfOwnerByIndex(a1.address, 1)
        let tokenId2 = await nftInstance.tokenOfOwnerByIndex(a1.address, 2)

        //// staking 2 cards
        tx = await vaultInstance.connect(a1).stake([tokenId0, tokenId1]); // stake 2 cards
        await tx.wait();

        await network.provider.send("evm_mine");

        //// staking 1 card
        let diffs = diff.mul(await vaultInstance.balanceOf(a1.address));
        let expectedRewards1 = (await vaultInstance.calcRewards(a1.address)).add(diffs); // will be claimed after a block

        tx = await vaultInstance.connect(a1).stake([tokenId2]); // stake 1 card
        await tx.wait();

        expect(await erc20Instance.balanceOf(a1.address)).is.equal(expectedRewards1);

        await network.provider.send("evm_mine");

        //// unstaking 2 cards
        diffs = diff.mul(await vaultInstance.balanceOf(a1.address));
        let expectedRewards2 = (await vaultInstance.calcRewards(a1.address)).add(diffs); // will be claimed after a block

        tx = await vaultInstance.connect(a1).withdraw([tokenId1, tokenId2]); // unstake 2 cards
        await tx.wait();

        expect(await erc20Instance.balanceOf(a1.address)).is.equal(expectedRewards1.add(expectedRewards2));
    })

    it("rewards are given for both a exited token from bridge and existing tokens in vault", async () => {
        let tx = await erc20Instance.mintNftStaking(117000000);
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        await tx.wait();

        // approve
        tx = await nftInstance.connect(a1).setApprovalForAll(vaultInstance.address, true);
        await tx.wait();

        //// staking
        let tokenId0 = await nftInstance.tokenOfOwnerByIndex(a1.address, 0)
        let tokenId1 = await nftInstance.tokenOfOwnerByIndex(a1.address, 1)
        let tokenId2 = await nftInstance.tokenOfOwnerByIndex(a1.address, 2)
        tx = await vaultInstance.connect(a1).stake([tokenId0, tokenId1, tokenId2]);
        await tx.wait();

        await network.provider.send("evm_mine");

        let diffs = diff.mul(await vaultInstance.balanceOf(a1.address));
        let expectedRewards1 = (await vaultInstance.calcRewards(a1.address)).add(diffs).add(diffs); // 2 blocks forward

        // Deposit into L2 - see the detailed logic in SquidVaultBridge.test.js
        tx = await vaultInstance.connect(a1).approve(bridge.address, tokenId1);
        await tx.wait()
        let depositor = a1; // in the bridge contract, the original owner (depositor) is recorded as an owner of tokenId1
        tx = await vaultInstance.connect(bridge).transferFrom(a1.address, bridge.address, tokenId1);
        await tx.wait();

        expect(await erc20Instance.balanceOf(a1.address)).is.equal(expectedRewards1);

        await network.provider.send("evm_mine");

        diffs = diff.mul(await vaultInstance.balanceOf(a1.address));
        let expectedRewards2 = (await vaultInstance.calcRewards(a1.address)).add(diffs).add(diffs); // 2 block forward

        // Withdraw from L2 - see the detailed logic in SquidVaultBridge.test.js
        tx = await vaultInstance.connect(bridge).transferFrom(bridge.address, depositor.address, tokenId1);
        await tx.wait();

        let expectedBridgeRewards = (await vaultInstance.calcBridgeRewards(tokenId1)); // determined, not 1 block forward

        expect(await erc20Instance.balanceOf(a1.address)).is.equal(expectedRewards1.add(expectedRewards2).add(expectedBridgeRewards));
    })

});
