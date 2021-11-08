require("dotenv").config({path: "../.env"});
const hre = require("hardhat");
const { expect } = require("chai");

const config = require('./config')
const nftCardAddress = config.testnet.nftCardAddress; // goerli nft
const leedoCoinAddress = config.testnet.leedoCoinAddress;  // goerli erc20 (LEEDO)
const leedoVaultAddress = config.testnet.leedoVaultAddress; // goerli vault
const maticNFTAddress = config.testnet.maticNFTAddress; // matic mumbai nft (mapped with goerli vault)
const raffleAddress = config.testnet.raffleAddress; //mainnet
const erc721PredicateAddress = config.testnet.erc721PredicateAddress; // goerli, approve --> transfer & lock
const rootChainManagerAddress = config.testnet.rootChainManagerAddress; // goerli, depostFor callee
const RootChainManagerABI = config.abi.RootChainManagerABI;

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

    clog('<staker can deposit to matic>')

    // approve for deposit into L2
    let vaultBalance = await vaultInstance.balanceOf(a0.address);
    let tokenId = await vaultInstance.tokenOfOwnerByIndex(a0.address, vaultBalance - 1);
    let bridgeAddr = await vaultInstance.bridgeAddr();

    if (bridgeAddr !== erc721PredicateAddress) {
      clog(`incorrect maticNFTAddress: ${bridgeAddr}  ${erc721PredicateAddress}`);
      return;
    }

    let tx = await vaultInstance.connect(a0).approve(bridgeAddr, tokenId);
    await tx.wait();

    clog(` - getApproved: ${tokenId}, ${await vaultInstance.getApproved(tokenId)}`); //hre.ethers.BigNumber.from(tokenId))}`)

    // depositFor for deposit into L2

    const abiCoder = new ethers.utils.AbiCoder();
    const depositData = abiCoder.encode(['uint256'], [tokenId.toString()]);
    tx = await maticInstance.connect(a0).depositFor(a0.address, vaultInstance.address, depositData);

    await tx.wait();
    clog(`depositFor tx for tokenID ${tokenId}`);
    clog(tx);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

