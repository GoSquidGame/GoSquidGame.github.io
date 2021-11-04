require("dotenv").config({path: "../.env"});
const { hre, getChainId } = require("hardhat");

const main = async () => {

    const LeedoNFTCard = await ethers.getContractFactory("LeedoNFTCard");
    nftInstance = await LeedoNFTCard.deploy();
    await nftInstance.deployed();
  
    console.log("nftCard Address is", nftInstance.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// mumbai address:  0x2E39443148785c9be0d7343799Ed48672381e056
