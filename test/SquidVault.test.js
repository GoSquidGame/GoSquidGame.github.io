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

describe("SquidGameVault", () => {

    let owner, a1, a2, a3, dao;
    let nftInstance, erc20Instance, vaultInstance;

    beforeEach( async () => {
        [owner, a1, a2, a3, dao] = await hre.ethers.getSigners();

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

    it("address consistency check between erc20 and vault contracts", async () => {
        expect(await erc20Instance.nftAddr()).is.equal(nftInstance.address);
        expect(await vaultInstance.nftAddr()).is.equal(nftInstance.address);
        expect(await vaultInstance.erc20Addr()).is.equal(erc20Instance.address);
        expect(await erc20Instance.nftVaultAddr()).is.equal(vaultInstance.address);
    })


    it("hodlers cannot stake before approval", async () => {

        let tx = await nftInstance.connect(a1).claim();
        await tx.wait();
        expect(await nftInstance.balanceOf(a1.address)).is.equal(1);
        // not approved yet
        let tokenId1 = await nftInstance.tokenOfOwnerByIndex(a1.address, 0);
        await expect(vaultInstance.connect(a1).stake([tokenId1])).to.be.revertedWith("ERC721: transfer caller is not owner nor approved");
    })

    it("hodlers can stake multiple nfts after approval", async () => {
        // no nft
        await expect(vaultInstance.connect(a1).stake([1])).to.be.revertedWith("Owner is differenent");
        // claim
        let tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        await tx.wait();
        expect(await nftInstance.balanceOf(a1.address)).is.equal(4);
        // approve
        expect(await nftInstance.isApprovedForAll(a1.address, vaultInstance.address)).is.equal(false);
        tx = await nftInstance.connect(a1).setApprovalForAll(vaultInstance.address, true);
        await tx.wait();
        expect(await nftInstance.isApprovedForAll(a1.address, vaultInstance.address)).is.equal(true);

        // stake
        let tokenId1 = await nftInstance.tokenOfOwnerByIndex(a1.address, 2);
        let tokenId2 = await nftInstance.tokenOfOwnerByIndex(a1.address, 3);

        //// in main card
        expect(await nftInstance.ownerOf(tokenId1)).is.equal(a1.address);
        expect(await nftInstance.balanceOf(a1.address)).is.equal(4);
        //// in vault
        expect(await vaultInstance.balanceOf(a1.address)).is.equal(0);
        expect((await vaultInstance.tokensOf(a1.address)).length).is.equal(0);

        //// staking
        tx = await vaultInstance.connect(a1).stake([tokenId1, tokenId2]);
        await tx.wait();

        //// in main card
        expect(await nftInstance.ownerOf(tokenId1)).is.equal(vaultInstance.address);
        expect(await nftInstance.balanceOf(a1.address)).is.equal(4-2);
        //// in vault, new minted NFT
        expect(await vaultInstance.ownerOf(tokenId1)).is.equal(a1.address);
        expect(await vaultInstance.ownerOf(tokenId2)).is.equal(a1.address);
        expect(await vaultInstance.balanceOf(a1.address)).is.equal(2);
        expect((await vaultInstance.tokensOf(a1.address)).length).is.equal(2);
        expect((await vaultInstance.tokensOf(a1.address))[0]).is.equal(tokenId1);
        expect((await vaultInstance.tokensOf(a1.address))[1]).is.equal(tokenId2);
    })

    // claimRewards
    it("owner can claim rewards", async () => {
        let tx = await nftInstance.connect(a1).claim();
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

        //tx = await erc20Instance.mintNftStaking(117000000);
        //await tx.wait();

        expect(await erc20Instance.balanceOf(a1.address)).is.equal(0);
        tx = await vaultInstance.connect(a1).claimRewards();
        await tx.wait();
        expect(await erc20Instance.balanceOf(a1.address)).is.not.equal(0);

    })

    it("vault transfers erc20 when the nft balance in the vault changes", async () => {

        let tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        await tx.wait();

        // approve
        tx = await nftInstance.connect(a1).setApprovalForAll(vaultInstance.address, true);
        await tx.wait();

        //// staking
        let tokenId1 = await nftInstance.tokenOfOwnerByIndex(a1.address, 0)
        tx = await vaultInstance.connect(a1).stake([tokenId1]);
        await tx.wait();
        // 0 erc20 balance
        expect(await erc20Instance.balanceOf(a1.address)).is.equal(0);

        let tokenId2 = await nftInstance.tokenOfOwnerByIndex(a1.address, 0)
        // we do not need this step anymore
        // //// inject erc20 and one more staking again
        //// await expect(vaultInstance.connect(a1).stake([tokenId2])).to.be.revertedWith('ERC20: transfer amount exceeds balance');
        //// tx = await erc20Instance.mintNftStaking(117000000);
        //// await tx.wait();
        tx = await vaultInstance.connect(a1).stake([tokenId2]);
        await tx.wait();

        expect(await vaultInstance.balanceOf(a1.address)).is.equal(2);
        expect((await vaultInstance.tokensOf(a1.address)).length).is.equal(2);

        // not 0 erc20 balance
        expect(await erc20Instance.balanceOf(a1.address)).is.not.equal(0);
    })

    it("stakers can withdraw their nfts and erc20", async () => {

        let tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        await tx.wait();

        expect(await nftInstance.balanceOf(a1.address)).is.equal(4);

        // approve
        tx = await nftInstance.connect(a1).setApprovalForAll(vaultInstance.address, true);
        await tx.wait();

        //// staking
        tx = await vaultInstance.connect(a1).stakeByCount(4);
        await tx.wait();
        // 0 erc20 balance
        expect(await erc20Instance.balanceOf(a1.address)).is.equal(0);
        expect(await nftInstance.balanceOf(a1.address)).is.equal(0);

        // inject erc20
        //tx = await erc20Instance.mintNftStaking(117000000);
        //await tx.wait();

        expect(await vaultInstance.balanceOf(a1.address)).is.equal(4);
        let tokens = await vaultInstance.tokensOf(a1.address);
        expect(tokens.length).is.equal(4);

        // withdraw
        tx = await vaultInstance.connect(a1).withdraw(tokens);
        await tx.wait();
        
        expect(await vaultInstance.balanceOf(a1.address)).is.equal(0);
        expect(await erc20Instance.balanceOf(a1.address)).is.not.equal(0);
        expect(await nftInstance.balanceOf(a1.address)).is.equal(4);
    })

    it("stakers can stake and withdraw 100 of nfts at once", async () => {

        let tx;
        let amount = 100;
        for (let i = 0; i<amount; i++) {
            tx = await nftInstance.connect(a1).claim();
        }
        await tx.wait();

        expect(await nftInstance.balanceOf(a1.address)).is.equal(amount);

        // approve
        tx = await nftInstance.connect(a1).setApprovalForAll(vaultInstance.address, true);
        await tx.wait();

        //// staking
        tx = await vaultInstance.connect(a1).stakeByCount(amount);
        await tx.wait();
        // 0 erc20 balance
        expect(await erc20Instance.balanceOf(a1.address)).is.equal(0);
        expect(await nftInstance.balanceOf(a1.address)).is.equal(0);

        // inject erc20
        //tx = await erc20Instance.mintNftStaking(117000000);
        //await tx.wait();

        expect(await vaultInstance.balanceOf(a1.address)).is.equal(amount);
        let tokens = await vaultInstance.tokensOf(a1.address);
        expect(tokens.length).is.equal(amount);

        // withdraw
        tx = await vaultInstance.connect(a1).withdraw(tokens);
        await tx.wait();
        
        expect(await vaultInstance.balanceOf(a1.address)).is.equal(0);
        expect(await erc20Instance.balanceOf(a1.address)).is.not.equal(0);
        expect(await nftInstance.balanceOf(a1.address)).is.equal(amount);
    })

    it("staked token's ownerOf is the original owner", async () => {

        let tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        await tx.wait();

        // approve
        tx = await nftInstance.connect(a1).setApprovalForAll(vaultInstance.address, true);
        await tx.wait();

        //// staking
        let tokenId1 = await nftInstance.tokenOfOwnerByIndex(a1.address, 0)
        tx = await vaultInstance.connect(a1).stake([tokenId1]);
        await tx.wait();

        expect(await vaultInstance.ownerOf(tokenId1)).be.equal(a1.address);
    })

    it("regular transfer is allowed only after setAllowTransfer(true) is called", async () => {
        let tx = await nftInstance.connect(a1).claim();
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

        // transfer before setAllowTransfer(true) is called
        await expect(vaultInstance.connect(a1).transferFrom(a1.address, a2.address, tokenId0)).to.be.revertedWith("NftVault: Regular transfer is not allowed");

        // transfer after setAllowTransfer(true) is called
        await vaultInstance.initializeDao(dao.address);
        await vaultInstance.connect(dao).setAllowTransfer(true);

        //// // balance change triggers erc20 claims
        //tx = await erc20Instance.mintNftStaking(117000000);
        //await tx.wait();
        //// // erc20 balance of a1 before transfer
        expect(await erc20Instance.balanceOf(a1.address)).is.equal(0);

        tx = await vaultInstance.connect(a1).transferFrom(a1.address, a2.address, tokenId0);
        await tx.wait();
        expect(await vaultInstance.ownerOf(tokenId0)).be.equal(a2.address);

        //// // erc20 balance of a1 after transfer
        expect(await erc20Instance.balanceOf(a1.address)).is.not.equal(0);
    })

    // approve
    it("only staker can 'approve' its staked tokens", async () => {
        let tx = await nftInstance.connect(a1).claim();
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

        expect(await vaultInstance.balanceOf(a1.address)).be.equal(3);
        
        // approve test
        expect(await vaultInstance.getApproved(tokenId0)).be.equal(zeroAccount);
        // not owner
        await expect(vaultInstance.approve(a2.address, tokenId0)).to.be.revertedWith("ERC721: approve caller is not owner nor approved for all");
        // owner
        tx = await vaultInstance.connect(a1).approve(a2.address, tokenId0);
        await tx.wait();
        expect(await vaultInstance.getApproved(tokenId0)).be.equal(a2.address);
    })

    it("approved operator can transfer other's tokens but the rewards are transferred to original owners", async () => {
        let tx = await nftInstance.connect(a1).claim();
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
        expect(await vaultInstance.balanceOf(a1.address)).be.equal(3);
        
        // owner
        tx = await vaultInstance.connect(a1).approve(a2.address, tokenId0);
        await tx.wait();

        // transfer by approved operator
        await vaultInstance.initializeDao(dao.address);
        await vaultInstance.connect(dao).setAllowTransfer(true);
        //tx = await erc20Instance.mintNftStaking(117000000);
        //await tx.wait();
        expect(await erc20Instance.balanceOf(a1.address)).is.equal(0);

        expect(await vaultInstance.ownerOf(tokenId0)).be.equal(a1.address);
        tx = await vaultInstance.connect(a2).transferFrom(a1.address, a3.address, tokenId0);
        await tx.wait();

        expect(await vaultInstance.ownerOf(tokenId0)).be.equal(a3.address);
        //// claimed erc20 is transfered into a1's account
        expect(await erc20Instance.balanceOf(a1.address)).is.not.equal(0);
    })

    // when A transfer a card to B,  Both A and B receive rewards
    // B will accumulate rewards including the card
    it("transfer of nft in vault triggers rewards claims of both sender and receivers", async () => {

    })
    
    it("receiver of an nft in vault accumulates rewards for the nft from the time of transfer", async () => {

    })
    
    // // setApprovalForAll
    // it("only owner can do setApprovalForAll", async () => {

    // })

    // safeTransferFrom and transferFrom

    // setAllowTransfer

    // transferOwnership

    // setExpiration

    // setRate and caculation
});
