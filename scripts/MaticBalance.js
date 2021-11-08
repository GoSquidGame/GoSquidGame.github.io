require("dotenv").config({path: "../.env"});
const hre = require("hardhat");
const { expect } = require("chai");

const config = require('./config')
// const nftCardAddress = config.testnet.nftCardAddress; // goerli nft
// const leedoCoinAddress = config.testnet.leedoCoinAddress;  // goerli erc20 (LEEDO)
// const leedoVaultAddress = config.testnet.leedoVaultAddress; // goerli vault
const maticNFTAddress = config.testnet.maticNFTAddress; // matic mumbai nft (mapped with goerli vault)
// const raffleAddress = config.testnet.raffleAddress; //mainnet
// const erc721PredicateAddress = config.testnet.erc721PredicateAddress; // goerli, approve --> transfer & lock
// const rootChainManagerAddress = config.testnet.rootChainManagerAddress; // goerli, depostFor callee
// const RootChainManagerABI = config.abi.RootChainManagerABI;

const clog = console.log;
const provider = hre.ethers.provider;

const main = async () => {

    let [a0, a1, a2] = await hre.ethers.getSigners();
    let admin = a0;
    let chainId = await hre.getChainId();

    if (chainId !== config.testnet.L2ChainID.toString()) {
      clog(`Your network, ${chainId} is not mumbai, ${config.testnet.L2ChainID}`);
      return;
    }
    clog(`Your network, ${chainId} is mumbai`);

    let maticNFTInstance = await hre.ethers.getContractAt(config.abi.MaticNFTABI, maticNFTAddress, a0);

    let maticBalance = await maticNFTInstance.balanceOf(a0.address);

    if (maticBalance.toNumber() <= 0) {
      clog(`${a0.address} has no tokens in ${maticNFTAddress}`);
      return;
    }

    let tokenIds = [];
    for (let i=0; i<maticBalance; i++) {
      tokenIds.push(await maticNFTInstance.tokenOfOwnerByIndex(a0.address, i));
    }

    clog(`${a0.address} has tokens, ${tokenIds}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

