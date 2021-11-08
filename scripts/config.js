require("dotenv").config({path: "../.env"});

module.exports = {
    testnet: {
        nftCardAddress: '0xC814aFD17170d2A8c02C9f0E8B7bA8Bf96aB75Ff', // goerli nft
        leedoCoinAddress: '0xbC66FB9821A757a684364266Fb856513A189dbF7',  // goerli erc20 (LEEDO)
        leedoVaultAddress: '0xBF6CC26C2cA10B59AA68fca6EdAc0773cE306c97', // goerli vault
        maticNFTAddress: '0x2E39443148785c9be0d7343799Ed48672381e056', // matic mumbai nft (mapped with goerli vault)
        raffleAddress: "0xb109173Ab57Dab7F954Ef8F10D87a5bFDB740EEB", //mainnet
        erc721PredicateAddress: "0x74D83801586E9D3C4dc45FfCD30B54eA9C88cf9b", // goerli, approve --> transfer & lock
        rootChainManagerAddress: '0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74', // goerli, depostFor callee
        L1ChainID: 5,    // ethereum goerli
        L2ChainID: 80001,   // matic mumbai
        parentProvider: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
        maticProvider: `https://rpc-mumbai.maticvigil.com/v1/${process.env.MATIC_API_KEY}`,
    },
    mainnet: {
        nftCardAddress: '0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f', // mainnet nft
        leedoCoinAddress: '0x3eEde143aDb9a80c6a44C63dad76269D33e2C8d1',  // mainnet erc20 (LEEDO)
        leedoVaultAddress: '0x0866f2af4cf0b601A1a2c4eBD56CBB954a1cF004', // mainnet vault
        maticNFTAddress: '', // matic polygon nft (mapped with mainnet vault)
        raffleAddress: "0xb109173Ab57Dab7F954Ef8F10D87a5bFDB740EEB", //mainnet
        erc721PredicateAddress: "0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD", // mainnet, approve --> transfer & lock
        rootChainManagerAddress: '0xA0c68C638235ee32657e8f720a23ceC1bFc77C77', // mainnet, depostFor callee
        L1ChainID: 1,    // ethereum mainnet
        L2ChainID: 137,   // polygon
        parentProvider: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        maticProvider: `https://matic-mainnet.chainstacklabs.com/${process.env.MATIC_API_KEY}`,
    },
    abi: {
        RootChainManagerABI: [
            "function depositFor(address user, address rootToken, bytes calldata depositData) external",
        ],
        MaticNFTABI: [
            "function updateChildChainManager(address newChildChainManagerProxy) external",
            "function withdraw(uint256 tokenId) external",
            "function withdrawBatch(uint256[] calldata tokenIds) external",
            "function ownerOf(uint256 tokenId) external view returns (address)",
            "function balanceOf(address owner) external view returns (uint256)",
            "function getGenes(uint256 _tokenId) public view returns (uint8[8])",
            "function getConsonants(uint256 _tokenId) public view returns (string[3])",
            "function getConsonantsIndex(uint256 _tokenId) public view returns (uint8[3])",
            "function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256)",
            "function tokenURI(uint256 _tokenId) public view returns (string)",
        ],
    },
}

/*
Test accounts

a0: 0x7D0479eB884C41311F5a6581d42B8b784fA8c1b6
a1: 0x4278827E51e1453af40ad3F454AE5b556823217c
a2: 0x87b9726420E69706C3Eb627aE9C936C2342115bC

a0: 0x3338202aF08eBD7DB74dF5FA290563b28e5Ce333
a1: 0xa94FE8F99e1Ba6DF5999dd6c94Ecf51a64928656
a2: 0x16e73Ab440AfF800DE00cc8474514E21200E1f4c

*/