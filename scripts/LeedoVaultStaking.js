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

    clog('<hodlers can stake>')

    // prev balance
    let prevLeedoBalance = await leedoInstance.balanceOf(a0.address);
    let prevNftBalance = await nftInstance.balanceOf(a0.address);
    let prevNftBalanceAtVault = await vaultInstance.balanceOf(a0.address);

    clog(` - Previous balance         - leedo: ${prevLeedoBalance}, nft: ${prevNftBalance}, staking: ${prevNftBalanceAtVault}`);

    // approve
    tx = await nftInstance.connect(a0).setApprovalForAll(vaultInstance.address, true);
    await tx.wait();

    // staking
    let t1 = await nftInstance.tokenOfOwnerByIndex(a0.address, prevNftBalance-1)
    let t2 = await nftInstance.tokenOfOwnerByIndex(a0.address, prevNftBalance-2)

    tx = await vaultInstance.connect(a0).stake([t1, t2]);
    await tx.wait();

    // balance after staking
    let nftBalance = await nftInstance.balanceOf(a0.address);
    let nftBalanceAtVault = await vaultInstance.balanceOf(a0.address);
    clog(` - Balance after staking    - leedo: ${prevLeedoBalance}, nft: ${nftBalance}, staking: ${nftBalanceAtVault}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

