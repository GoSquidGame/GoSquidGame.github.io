const { getChainId } = require("hardhat");

require("dotenv").config({path: "../.env"});


const raffleAddr = "0xb109173Ab57Dab7F954Ef8F10D87a5bFDB740EEB"; //mainnet

const func = async (hre) => {

    const chainId = await getChainId();

    let nftCardAddress = "";
    let erc721PredicateAddress = "";

    if (chainId == 1) { // mainnet
        nftCardAddress = "0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f";
        erc721PredicateAddress = "0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD";
    } else if (chainId == 4) {
        nftCardAddress = "0x8d450eA438b993908f28ad3633a94d91edE8419B";
        erc721PredicateAddress = "";
    } else if (chainId == 5) {
        nftCardAddress = "0xC814aFD17170d2A8c02C9f0E8B7bA8Bf96aB75Ff";
        erc721PredicateAddress = "0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b";
    }

    const LeedoCoin = await ethers.getContractFactory("LeedoERC20");
    erc20Instance = await LeedoCoin.deploy(nftCardAddress, raffleAddr);
    await erc20Instance.deployed();
    
    const SquidVault = await ethers.getContractFactory("LeedoNftVault");
    vaultInstance = await SquidVault.deploy(nftCardAddress, erc20Instance.address, erc721PredicateAddress);
    await vaultInstance.deployed();

    let tx = await erc20Instance.setNftVaultAddr(vaultInstance.address);
    await tx.wait();
  
    console.log("nftCard Address is", nftCardAddress);
    console.log("LEEDO Coin Address is", erc20Instance.address);
    console.log("LEEDO Vault Address is", vaultInstance.address);
    console.log("Matic Predicate Address is", erc721PredicateAddress);
}

func.tags = [ 'LeedoERC20', 'LeedoNftVault' ]
module.exports = func

//// contract addresses (goerli)
// nftCard Address is 0xC814aFD17170d2A8c02C9f0E8B7bA8Bf96aB75Ff
// LEEDO Coin Address is 0xbC66FB9821A757a684364266Fb856513A189dbF7
// LEEDO Vault Address is 0xBF6CC26C2cA10B59AA68fca6EdAc0773cE306c97
// Matic Predicate Address is 0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b

//// etherscan code verification (change arguments according to the result of deployment)
// hh verify --contract contracts/LeedoERC20.sol:LeedoERC20 --network goerli 0xbC66FB9821A757a684364266Fb856513A189dbF7 "0xC814aFD17170d2A8c02C9f0E8B7bA8Bf96aB75Ff" "0xb109173Ab57Dab7F954Ef8F10D87a5bFDB740EEB"
// hh verify --contract contracts/LeedoNftVault.sol:LeedoNftVault --network goerli 0xBF6CC26C2cA10B59AA68fca6EdAc0773cE306c97 "0xC814aFD17170d2A8c02C9f0E8B7bA8Bf96aB75Ff" "0xbC66FB9821A757a684364266Fb856513A189dbF7" "0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b"
