require("dotenv").config({path: "../.env"});
const hre = require("hardhat");
const { expect } = require("chai");

// goerli contracts
const nftCardAddress = '0xC814aFD17170d2A8c02C9f0E8B7bA8Bf96aB75Ff';
const leedoCoinAddress = '0xbC66FB9821A757a684364266Fb856513A189dbF7';
const leedoVaultAddress = '0xBF6CC26C2cA10B59AA68fca6EdAc0773cE306c97';
const raffleAddress = "0xb109173Ab57Dab7F954Ef8F10D87a5bFDB740EEB"; //mainnet

//////////////////////////////////////// Matic Polygon / Mumbai static contract info
//// approve --> transfer & lock
const erc721PredicateAddress = "0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b"; // goerli
// const erc721PredicateAddress = "0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD"; // mainnet
//// depostFor callee
// const rootChainManagerAddress = '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74'; // goerli
// const rootChainManagerAddress = '0xA0c68C638235ee32657e8f720a23ceC1bFc77C77'; // mainnet

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

    let l = accounts.length;

    clog('<hodlers can stake>')

    // prev balance
    let prevLeedoBalance = await leedoInstance.balanceOf(a1.address);
    let prevNftBalance = await nftInstance.balanceOf(a1.address);
    let prevNftBalanceAtVault = await vaultInstance.balanceOf(a1.address);

    clog(` - Previous balance         - leedo: ${prevLeedoBalance}, nft: ${prevNftBalance}, staking: ${prevNftBalanceAtVault}`);

    clog('<stakers can withdraw their nfts and erc20>')

    // withdraw
    let tokens = await vaultInstance.tokensOf(a1.address);
    let expectedRewards = await vaultInstance.calcRewards(a1.address);
    clog(` - expected rewards: ${expectedRewards}`);
    tx = await vaultInstance.connect(a1).withdraw(tokens);
    await tx.wait();
    
    // balance after withdrawal
    let currentLeedoBalance = await leedoInstance.balanceOf(a1.address);
    let currentNftBalance = await nftInstance.balanceOf(a1.address);
    let currentNftBalanceAtVault = await vaultInstance.balanceOf(a1.address);
    clog(` - Balance after withdrawal - leedo: ${currentLeedoBalance}, nft: ${currentNftBalance}, staking: ${currentNftBalanceAtVault}`);
    clog(` - Balance in the vault     - leedo: ${await leedoInstance.balanceOf(vaultInstance.address)}, staked: ${await nftInstance.balanceOf(vaultInstance.address)}`);
    clog();
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

