require("dotenv").config({path: "../.env"});
const { hre, getChainId } = require("hardhat");


const main = async () => {

    const chainId = await getChainId();

    let erc721PredicateAddress = "";

    if (chainId == 1) { // mainnet
        erc721PredicateAddress = "0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD";
    } else if (chainId == 4) {
        erc721PredicateAddress = "";
    } else if (chainId == 5) {
        erc721PredicateAddress = "0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b";
    } else {    // mock
        erc721PredicateAddress = "0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b";
    }

    const SquidGameCard = await ethers.getContractFactory("SquidGameCard");
    nftInstance = await SquidGameCard.deploy();
    await nftInstance.deployed();

    const SquidRaffle = await ethers.getContractFactory("SquidRaffle");
    raffleInstance = await SquidRaffle.deploy(nftInstance.address);
    await raffleInstance.deployed();

    const LeedoCoin = await ethers.getContractFactory("LeedoERC20");
    erc20Instance = await LeedoCoin.deploy(nftInstance.address, raffleInstance.address);
    await erc20Instance.deployed();
    
    const SquidVault = await ethers.getContractFactory("LeedoNftVault");
    vaultInstance = await SquidVault.deploy(nftInstance.address, erc20Instance.address, erc721PredicateAddress);
    await vaultInstance.deployed();

    let tx = await erc20Instance.setNftVaultAddr(vaultInstance.address);
    await tx.wait();
  
    console.log("nftCard Address is", nftInstance.address);
    console.log("Raffle Address is", raffleInstance.address);
    console.log("LEEDO Coin Address is", erc20Instance.address);
    console.log("LEEDO Vault Address is", vaultInstance.address);
    console.log("Matic Predicate Address is", erc721PredicateAddress);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

