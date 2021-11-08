require("dotenv").config({path: "../.env"});
const { ethers } = require("hardhat");
const { expect } = require("chai");

// const nftAddr = 0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f; //mainnet   

describe("SquidGameCard", () => {

    let owner, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19;
    let nftInstance;

    beforeEach( async () => {
        [owner, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19] = await hre.ethers.getSigners();
        const SquidGameCard = await ethers.getContractFactory("SquidGameCard");
        nftInstance = await SquidGameCard.deploy();
        await nftInstance.deployed();
    });

    it("only admin has 10 cards after contract deployment", async () => {
        expect(await nftInstance.balanceOf(owner.address)).to.equal(10);
        expect(await nftInstance.balanceOf(a1.address)).to.equal(0);
    })

    it("anyone can claim freely", async () => {
        let tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        tx = await nftInstance.connect(a1).claim();
        await tx.wait();

        expect(await nftInstance.balanceOf(a1.address)).to.equal(3);
    })

    it("hodler can transfer her nft", async () => {
        expect(await nftInstance.balanceOf(a1.address)).to.equal(0);

        let tokenId = await nftInstance.tokenOfOwnerByIndex(owner.address, 3);
        let ownerBalance = await nftInstance.balanceOf(owner.address);
        let receiverBalance = await nftInstance.balanceOf(a1.address);

        let tx = await nftInstance.transferFrom(owner.address, a1.address, tokenId)
        await tx.wait();

        // sender
        expect(await nftInstance.balanceOf(owner.address)).is.equal(ownerBalance - 1);
        // receiver
        expect(await nftInstance.balanceOf(a1.address)).to.equal(receiverBalance + 1);
        expect(await nftInstance.tokenOfOwnerByIndex(a1.address, receiverBalance + 1 - 1)).to.equal(tokenId);
    })
});
