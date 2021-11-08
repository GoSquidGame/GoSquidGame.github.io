require("dotenv").config({path: "../.env"});
const hre = require("hardhat");

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

    clog('<a hodler claim 2 cards>')
    // claim 2 cards for test
    let tx = await nftInstance.connect(a0).claim();
    tx = await nftInstance.connect(a0).claim();
    await tx.wait();

    // prev balance
    let prevLeedoBalance = await leedoInstance.balanceOf(a0.address);
    let prevNftBalance = await nftInstance.balanceOf(a0.address);
    let prevNftBalanceAtVault = await vaultInstance.balanceOf(a0.address);

    clog(` - Current balance         - leedo: ${prevLeedoBalance}, nft: ${prevNftBalance}, staking: ${prevNftBalanceAtVault}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

