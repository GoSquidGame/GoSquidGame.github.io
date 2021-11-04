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
    let accounts = [a0, a1, a2];
    let signer = a0;
    let chainId = await hre.getChainId();

    let nftInstance = await hre.ethers.getContractAt("SquidGameCard", nftCardAddress, a0);
    let leedoInstance = await hre.ethers.getContractAt("LeedoERC20", leedoCoinAddress, a0);
    let vaultInstance = await hre.ethers.getContractAt("LeedoNftVault", leedoVaultAddress, a0);
    let maticInstance = await hre.ethers.getContractAt(RootChainManagerABI, rootChainManagerAddress, a0);

    // clog('<staker can deposit to matic>')

    // // prev balance
    // let prevNftBalance = await vaultInstance.balanceOf(a1.address);
    // if (prevNftBalance <= 0) {
    //   clog("no staked nfts");
    //   return;
    // }

    // // approve for deposit into L2
    // let tokenId = await vaultInstance.tokenOfOwnerByIndex(a1.address, prevNftBalance - 1);
    // let maticPredicateAddress = await vaultInstance.bridgeAddr();
    // // clog(maticPredicateAddress);
    // clog(tokenId.toNumber());

    // clog(` - a1 address is ${a1.address}`);
    // // let stakedTokenOwner = await vaultInstance.ownerOf(tokenId);
    // clog(` - staked token's owner is ${await vaultInstance.ownerOf(tokenId)}`);

    // // approve
    // let tx = await vaultInstance.connect(a1).approve(maticPredicateAddress, tokenId);
    // await tx.wait();

    clog('<staker can deposit to matic>')
    // depositFor for deposit into L2

    clog(` - getApproved: ${await vaultInstance.getApproved(hre.ethers.BigNumber.from(44))}`)

    const abiCoder = new hre.ethers.utils.AbiCoder();
    // const depositData = abiCoder.encode(['uint256'], [hre.ethers.BigNumber.from(44)]);

    const depositData = web3.eth.abi.encodeParameter('uint256', '44');

    // tx = await maticInstance.connect(a1).depositFor(a1.address, vaultInstance.address, hre.ethers.BigNumber.from(44));
    tx = await maticInstance.connect(a1).depositFor(a1.address, vaultInstance.address, depositData);
    // tx = await maticInstance.connect(a1).depositFor(a1.address, nftInstance.address, depositData);
    await tx.wait();

};


// Convert a hex string to a byte array
function hexToBytes(hex) {
  for (var bytes = [], c = 0; c < hex.length; c += 2)
  bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

// Convert a byte array to a hex string
function bytesToHex(bytes) {
  for (var hex = [], i = 0; i < bytes.length; i++) {
      var current = bytes[i] < 0 ? bytes[i] + 256 : bytes[i];
      hex.push((current >>> 4).toString(16));
      hex.push((current & 0xF).toString(16));
  }
  return hex.join("");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

