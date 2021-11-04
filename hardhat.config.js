require('@nomiclabs/hardhat-web3')
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-waffle')
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan"); // etherscan verification

require('hardhat-deploy')

require("dotenv").config({path: "./.env"});

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs) => {
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, "ether"), "ETH");
  });

task("deployer", "Prints deployer's info")
  .setAction(async () => {

    // hre = hardhat runtime environment
    const { deployer } = await hre.getNamedAccounts()

    console.log("Deployer:", deployer)
    const balance = await web3.eth.getBalance(deployer);
    console.log("Balance:", web3.utils.fromWei(balance, "ether"), "ETH");
  });

module.exports = {
  networks: {
    // hardhat local dev
    hardhat: {
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk'
      }
    },

    // // hardhat mainnet folk
    // hardhat_fork: {
    //   forking: {
    //     url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`
    //   }
    // },

    // mainnet
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: {
        mnemonic: process.env.MNEMONIC
      },
      network_id: '*', // Match any network id
      // gasPrice: 0,
    },

    // rinkeby
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: {
        mnemonic: process.env.MNEMONIC
      },
      network_id: '*', // Match any network id
      // gasPrice: 0,
    },

    // ropsten
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: {
        mnemonic: process.env.MNEMONIC
      },
      network_id: '*', // Match any network id
      // gasPrice: 0,
    },

    // goerli
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: {
        mnemonic: process.env.MNEMONIC
      },
      network_id: '*', // Match any network id
      // gas: 10000000,
      // gasPrice: 0,
    },

    // mumbai - Matic testnet
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      chainId: 80001,
      accounts: {
        mnemonic: process.env.MNEMONIC
      },
      // gas: 5000000
    },

    // polygon - Matic mainnet
    polygon: {
      url: 'https://matic-mainnet.chainstacklabs.com',
      accounts: {
        mnemonic: process.env.MNEMONIC
      },
      // gasPrice: 0
    },

    // ganache
    ganache: {
      url: `http://192.168.55.78:7545`,
      accounts: {
        mnemonic: 'fit capable jeans fitness tiny seat mother dove crop train ignore immune'
      },
      // gasPrice: 0,
    },
  },

  // etherscan verification
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },

  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  },

  namedAccounts: {
    deployer: 0
  },
}
