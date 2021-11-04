require("dotenv").config({path: "../.env"});
const hre = require("hardhat");
const { expect } = require("chai");

// import Web3 from "web3";

// const web3 = new Web3(null);

// goerli contracts
const nftCardAddress = '0xC814aFD17170d2A8c02C9f0E8B7bA8Bf96aB75Ff';
const leedoCoinAddress = '0xbC66FB9821A757a684364266Fb856513A189dbF7';
const leedoVaultAddress = '0xBF6CC26C2cA10B59AA68fca6EdAc0773cE306c97';
const raffleAddress = "0xb109173Ab57Dab7F954Ef8F10D87a5bFDB740EEB"; //mainnet
// mumbai address (L2 counterparty, LeedoNFTCard):  0x2E39443148785c9be0d7343799Ed48672381e056

const childNFTinMatic = '0xdCfD924b9963929b98793C49b2e0D12C53f8D9A0'; // matic mumbai
const childNFTinMaticABI = require("./contracts/KoCoChild.json");

//////////////////////////////////////// Matic Polygon / Mumbai static contract info
//// approve --> transfer & lock
const erc721PredicateAddress = "0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b"; // goerli
// const erc721PredicateAddress = "0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD"; // mainnet
//// depostFor callee
const rootChainManagerAddress = '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74'; // goerli
// const RootChainManager = require("./contracts/RootChainManager.json");

// const rootChainManagerAddress = '0xA0c68C638235ee32657e8f720a23ceC1bFc77C77'; // mainnet

const RootChainManagerABI = [
  "function depositFor(address user, address rootToken, bytes calldata depositData) external",
];


const clog = console.log;
const provider = hre.ethers.provider;

const main = async () => {

    let [a0, a1, a2] = await hre.ethers.getSigners();
    let childInstance = await hre.ethers.getContractAt(childNFTinMaticABI, childNFTinMatic, a0);

    // clog('<check L2>')

    // prev balance
    let balance = await childInstance.balanceOf(a1.address);
    if (balance <= 0) {
      clog("no staked nfts");
      return;
    }
    clog(` - ${a1.address} has ${balance} NFTs`);

    for (let i=0; i<balance; i++) {
      let tokenId = await childInstance.tokenOfOwnerByIndex(a1.address, balance - 1);
      clog(`      - TokenID: ${tokenId.toNumber()}`);
    }

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

