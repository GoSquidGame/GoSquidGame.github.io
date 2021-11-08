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

    let [signer, dev] = await hre.ethers.getSigners();
    let chainId = await hre.getChainId();

    let nftInstance = await hre.ethers.getContractAt("SquidGameCard", nftCardAddress, signer);
    let leedoInstance = await hre.ethers.getContractAt("LeedoERC20", leedoCoinAddress, signer);
    let vaultInstance = await hre.ethers.getContractAt("LeedoNftVault", leedoVaultAddress, signer);

    // // one time test
    // clog('<admin can mint dev budget>')

    // let prevBalance = ethers.utils.formatUnits(await leedoInstance.balanceOf(dev.address), 18);
    // let amount = 1000000000;
    // let tx = await leedoInstance.mintDev(dev.address, amount);
    // await tx.wait();
    // let currentBalance = ethers.utils.formatUnits(await leedoInstance.balanceOf(dev.address), 18);

    // clog(` - Dev: prev balance: ${prevBalance}, current balance: ${currentBalance}`);
    // clog();

    let tx = await leedoInstance.connect(dev).transfer('0xBF6CC26C2cA10B59AA68fca6EdAc0773cE306c97', hre.ethers.utils.parseUnits('405200215149746640', 'wei'));
    await tx.wait();
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
