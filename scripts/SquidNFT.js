require("dotenv").config({path: "../.env"});
const hre = require("hardhat");
const { expect } = require("chai");

const config = require('../config')
const nftCardAddress = config.testnet.nftCardAddress; // goerli nft
const leedoCoinAddress = config.testnet.leedoCoinAddress;  // goerli erc20 (LEEDO)
const leedoVaultAddress = config.testnet.leedoVaultAddress; // goerli vault
const maticNFTAddress = config.testnet.maticNFTAddress; // matic mumbai nft (mapped with goerli vault)
const raffleAddress = config.testnet.raffleAddress; //mainnet
const erc721PredicateAddress = config.testnet.erc721PredicateAddress; // goerli, approve --> transfer & lock
const rootChainManagerAddress = config.testnet.rootChainManagerAddress; // goerli, depostFor callee
const RootChainManagerABI = config.testnet.abi.RootChainManagerABI;

const clog = console.log;
const provider = hre.ethers.provider;

const main = async () => {

    let [a0, a0, a2] = await hre.ethers.getSigners();
    let accounts = [a0, a1, a2];
    let signer = a0;
    let chainId = await hre.getChainId();

    let nftInstance = await hre.ethers.getContractAt("SquidGameCard", nftCardAddress, a0);
    let leedoInstance = await hre.ethers.getContractAt("LeedoERC20", leedoCoinAddress, a0);
    let vaultInstance = await hre.ethers.getContractAt("LeedoNftVault", leedoVaultAddress, a0);

    let l = accounts.length;

    clog('<anyone can claim>')
    for (let i=0; i<l; i++) {
        let prevBalance = await nftInstance.balanceOf(accounts[i].address);
        let tx = await nftInstance.connect(accounts[i]).claim();
        await tx.wait();

        clog(` - prev balance: ${prevBalance}, current balance: ${(await nftInstance.balanceOf(accounts[i].address))}`)
    }
    clog();

    clog('<hodler can transfer her nft>');
    let prevBalance = await nftInstance.balanceOf(accounts[1].address);
   
    let tokenId = await nftInstance.tokenOfOwnerByIndex(accounts[0].address, 3);
    let ownerBalance = await nftInstance.balanceOf(accounts[0].address);
    
    let tx = await nftInstance.transferFrom(accounts[0].address, accounts[1].address, tokenId)
    await tx.wait();

    clog(` - sender: prev balance: ${ownerBalance}, current balance: ${(await nftInstance.balanceOf(accounts[0].address))}`)
    clog(` - receiver: prev balance: ${prevBalance}, current balance: ${(await nftInstance.balanceOf(accounts[1].address))}`)
    // expect(await nftInstance.tokenOfOwnerByIndex(a0.address, 0)).to.equal(tokenId);
    clog();
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

