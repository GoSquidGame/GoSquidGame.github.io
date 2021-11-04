const hre = require("hardhat");

// const mainnetContractAbi = require("./contracts/SquidGameCard.json");
const mainnetContractAddress = '0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f';

// const goerliContractAbi = require('../contracts/SquidNFT.sol');
const goerliContractAccress = '0xC814aFD17170d2A8c02C9f0E8B7bA8Bf96aB75Ff';

// hre is a global runtime env
// - configured automatically according to hardhat.config.js
// - selected by '--network [networkname]' option in cli

const clog = console.log;
const provider = hre.ethers.provider;

const main = async () => {

    const signer = await hre.ethers.getSigner();

    let chainId = await hre.getChainId();
    let deployer = (await hre.getNamedAccounts()).deployer;
    let balance = await provider.getBalance(deployer);
    console.log(`chainID: ${chainId}, deployer: ${deployer}, balance: ${ethers.utils.formatEther(balance)} ETH`);

    // const instance = new hre.ethers.Contract(goerliContractAccress, goerliContractAbi, signer);
    const instance = await hre.ethers.getContractAt("SquidGameCard", goerliContractAccress, signer)

    clog('contract address:', instance.address);
    clog('total supply:', (await instance.totalSupply()).toNumber());
    clog('balance:', (await instance.balanceOf(deployer)).toNumber());
    tx = await instance.claim();
    await tx.wait();
    clog('(after claim) total supply:', (await instance.totalSupply()).toNumber());
    clog('(after claim) balance:', (await instance.balanceOf(deployer)).toNumber());
}

main();

    // // OR
    // // contract
    // const instance = new hre.ethers.Contract(goerliContractAccress, goerliContractAbi, provider);
    // clog('total supply:', (await instance.totalSupply()).toNumber());
    // clog('balance:', (await instance.balanceOf(deployer)).toNumber());
    // const instanceWithSigner = instance.connect(signer);
    // tx = await instanceWithSigner.claim();
    // await tx.wait();
    // clog('total supply:', (await instance.totalSupply()).toNumber());
    // clog('balance:', (await instance.balanceOf(deployer)).toNumber());

    // let tx = await signer.sendTransaction({
    //     to: '0xe7C41DDD9b4ECD000C48d8f0F33E04EA6d8CD065',
    //     value: ethers.utils.parseEther("1.0"),
    // });
    // await tx.wait();
    // balance = await provider.getBalance(deployer);
    // console.log(chainId, deployer, ethers.utils.formatEther(balance), 'ETH');
