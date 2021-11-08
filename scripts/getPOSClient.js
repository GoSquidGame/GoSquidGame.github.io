const { MaticPOSClient } = require('@maticnetwork/maticjs');
require("dotenv").config({path: "../.env"});

const parentProvider = `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`
const maticProvider = `https://rpc-mumbai.maticvigil.com/v1/${process.env.MATIC_API_KEY}`

const getPOSClient = () => {
  return new MaticPOSClient({
    network: 'testnet', // For mainnet change this to 'mainnet'
    version: 'mumbai', // For mainnet change this to 'v1'
    parentProvider: parentProvider,
    maticProvider: maticProvider,
  })
}

export default getPOSClient;
