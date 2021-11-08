require("dotenv").config({path: "../.env"});
const hre = require("hardhat");
// const {getPOSClient} = require("./getPOSClient");
const { MaticPOSClient } = require('@maticnetwork/maticjs');

const config = require('./config')
// const nftCardAddress = config.testnet.nftCardAddress; // goerli nft
// const leedoCoinAddress = config.testnet.leedoCoinAddress;  // goerli erc20 (LEEDO)
const leedoVaultAddress = config.testnet.leedoVaultAddress; // goerli vault
// const maticNFTAddress = config.testnet.maticNFTAddress; // matic mumbai nft (mapped with goerli vault)
// const raffleAddress = config.testnet.raffleAddress; //mainnet
// const erc721PredicateAddress = config.testnet.erc721PredicateAddress; // goerli, approve --> transfer & lock
const rootChainManagerAddress = config.testnet.rootChainManagerAddress; // goerli, depostFor callee
// const RootChainManagerABI = config.abi.RootChainManagerABI;


const getPOSClient = () => {
  return new MaticPOSClient({
    network: 'testnet', // For mainnet change this to 'mainnet'
    version: 'mumbai', // For mainnet change this to 'v1'
    parentProvider: config.testnet.parentProvider,
    maticProvider: config.testnet.maticProvider,
  })
}

const clog = console.log;
const provider = hre.ethers.provider;

const burnTxHash = '0x436ae5910e49eed44100a0f453c734f2ebb0585925c4e7faf65d28778773a027'; // tokenid 164

const main = async () => {

  let [a0, a1, a2] = await hre.ethers.getSigners();
  let accounts = [a0, a1, a2];
  let signer = a0;
  let chainId = await hre.getChainId();

  if (chainId !== config.testnet.L1ChainID.toString()) {
    clog(`Your network, ${chainId} is not goerli, ${config.testnet.L1ChainID}`);
    return;
  }
  clog(`Your network, ${chainId} is goerli`);


  try {

    const maticPOSClient = getPOSClient();
    const exitCalldata = await maticPOSClient
      .exitERC721(burnTxHash, { from: a0.address, encodeAbi: true })
  
    const tx = await a0.sendTransaction({
      from: a0.address,
      to: rootChainManagerAddress,
      data: exitCalldata.data,
    });
  
    clog('exit tx \n\n', tx);
  } catch (err) {
    clog('exit tx error \n\n', err.message);
  }

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

