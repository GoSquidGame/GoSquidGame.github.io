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
