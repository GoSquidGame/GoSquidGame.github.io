require("dotenv").config({path: "../.env"});
const hre = require("hardhat");

const childChainManagerAddress = '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa';

const clog = console.log;

const main = async () => {

    let [owner, dev] = await hre.ethers.getSigners();

    // 1. deploy erc20 (logic contract)
    const erc20 = await hre.ethers.getContractFactory("ULeedoERC20Matic");
    erc20Instance = await erc20.deploy();
    await erc20Instance.deployed();

    // 2. deploy proxy (proxy contract)
    const proxy = await ethers.getContractFactory("ULeedoERC20MaticProxy");
    proxyInstance = await proxy.deploy(erc20Instance.address);
    await proxyInstance.deployed();

    // 3. get proxy instance having ABI of logic contract and proxyInstance.address
    let erc20Proxy = await ethers.getContractAt("ULeedoERC20Matic", proxyInstance.address, owner);

    // 4. initialize erc20 AT PROXY CONTRACT using ABI of LOGIC CONTRACT
    await erc20Proxy.initialize(
      'LEEDO Project ERC20', 'LEEDO', 18, childChainManagerAddress
    );

    console.log("L2: LEEDO Coin Address (proxy) is", proxyInstance.address);
    console.log("L2: LEEDO logic contract address (backend) is", erc20Instance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// LEEDO Coin Address is 0x07e18F71a978a6F6C392880c5416B4E3D1aFE235
// LEEDO Proxy Address is 0x22a154C0ec019d8f460D9CF374c874EFA03b5c5c

//// polyscan code verification (change apikey in hardhat.config.js)
// hh verify --contract contracts/ULeedoERC20MaticProxy.sol:ULeedoERC20MaticProxy --network mumbai 0x22a154C0ec019d8f460D9CF374c874EFA03b5c5c "0x07e18F71a978a6F6C392880c5416B4E3D1aFE235"
