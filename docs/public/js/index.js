const setTheme = (theme) => (document.documentElement.className = theme);
setTheme("red"); // initialize

var nftAbi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "_MINT_START_TIME",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "_lastClaims",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "_seeds",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimTimeLock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "getConsonants",
    outputs: [{ internalType: "string[3]", name: "", type: "string[3]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "getConsonantsIndex",
    outputs: [{ internalType: "uint8[3]", name: "", type: "uint8[3]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "getGenes",
    outputs: [{ internalType: "uint8[8]", name: "", type: "uint8[8]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "getSeed",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isMintable",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "ownerClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
    name: "tokenByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
var nftAddress;
var nftContract;

var leedoerc20Abi = [
  {
    inputs: [
      { internalType: "address", name: "_nftAddress", type: "address" },
      { internalType: "address", name: "_raffleAddress", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "calcRewards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
    ],
    name: "claim",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimBlocksRequired",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "claimCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "claims",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "daoAddr",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "daoInitialized",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "daoMint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "daoMintableAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_season", type: "uint256" }],
    name: "daoSetSeason",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "daoTimelock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_daoAddress", type: "address" }],
    name: "initializeDao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "marketingMintableAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_devAddr", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "mintDev",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "mintNftVaultRewards",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintRafflePrize",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftAddr",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftMintableWeiAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftVaultAddr",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "raffleAddr",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rafflePrize",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "season",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_daoAddress", type: "address" }],
    name: "setDaoAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "setDaoMintable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newAddress", type: "address" }],
    name: "setNftAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_vault", type: "address" }],
    name: "setNftVaultAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_vault", type: "address" }],
    name: "setNftVaultAddrByDao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeLockDuration",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockDaoMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
var leedoerc20Address;
var leedoerc20Contract;

var leedovaultAbi = [
  {
    inputFs: [
      { internalType: "address", name: "_nftAddress", type: "address" },
      { internalType: "address", name: "_erc20Address", type: "address" },
      { internalType: "address", name: "_bridgeAddress", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bridgeAddr",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "calcBridgeRewards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "calcRewards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "daoAddr",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "daoInitialized",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "erc20Addr",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "expiration",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "getConsonants",
    outputs: [{ internalType: "string[3]", name: "", type: "string[3]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "getConsonantsIndex",
    outputs: [{ internalType: "uint8[3]", name: "", type: "uint8[3]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "getGenes",
    outputs: [{ internalType: "uint8[8]", name: "", type: "uint8[8]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_daoAddress", type: "address" }],
    name: "initializeDao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "lastBlocks",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftAddr",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_bool", type: "bool" }],
    name: "setAllowTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_bridgeAddress", type: "address" },
    ],
    name: "setBridgeAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_bridgeAddress", type: "address" },
    ],
    name: "setBridgeAddrByDao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_daoAddress", type: "address" }],
    name: "setDaoAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_erc20Address", type: "address" },
    ],
    name: "setErc20Addr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_erc20Address", type: "address" },
    ],
    name: "setErc20AddrByDao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_expiration", type: "uint256" }],
    name: "setExpiration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_rate", type: "uint256" }],
    name: "setRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" },
    ],
    name: "stake",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_count", type: "uint256" }],
    name: "stakeByCount",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
    name: "tokenByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_account", type: "address" }],
    name: "tokensOf",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "totalClaims",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "transferAllowed",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
var leedovaultAddress;
var leedovaultContract;

var utilityAbi = [
  {
    inputs: [
      { internalType: "address", name: "_nftAddr", type: "address" },
      { internalType: "address", name: "_nftVaultAddr", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "nftAddr",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftVaultAddr",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_account", type: "address" },
      { internalType: "bool", name: "staked", type: "bool" },
    ],
    name: "tokensOf",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
];
var utilityAddress;
var utilityContract;

var leedorianAbi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
      { internalType: "address[]", name: "_addrs", type: "address[]" },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_addr", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "_froms", type: "address[]" },
      { internalType: "address[]", name: "_tos", type: "address[]" },
      { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
    ],
    name: "bulkTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "getConsonants",
    outputs: [{ internalType: "string[3]", name: "", type: "string[3]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "getConsonantsIndex",
    outputs: [{ internalType: "uint8[3]", name: "", type: "uint8[3]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "getGenes",
    outputs: [{ internalType: "uint8[8]", name: "", type: "uint8[8]" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_addr", type: "address" }],
    name: "tokensOf",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_from", type: "address" },
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "uint256", name: "_tokenId", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
var leedorianAddress;
var leedorianContract;

var chainId = 4;
var networkList = {
  1: "Ethereum Mainnet",
  4: "Rinkeby Testnet",
  5: "Goerli Testnet",
  137: "Matic Polygon Mainnet",
  80001: "Matic Mumbai Testnet",
};
var myAddr;
let checkInTokenIdList = [];

var stakeKind = "unstaked";
var is_Vault_Approved = false;
var is_ERC20_Approved = false;
var staked_cards = 0;
var unstaked_cards = 0;

let unstakedIds = [];
let stakedIds = [];

var RewardCounterInterval;

const space_shuttle_img = [
  "Nuri4_homebanner_01.jpg",
  "Nuri4_homebanner_02.jpg",
  "Nuri4_homebanner_03.jpg",
  "Nuri4_homebanner_04.jpg",
];

showBanner();

window.addEventListener("load", function () {
  loadWeb3();
  if (typeof window.web3 !== "undefined") {
    startApp();
  } else {
    alert("You need to install dapp browser first to use this site!");
  }
});

function loadWeb3() {
  if (typeof window.ethereum !== "undefined") {
    window.web3 = new Web3(window.ethereum);
  } else {
    window.web3 = new Web3(
      "https://mainnet.infura.io/v3/302b2ccfd49a40d480567a132cb7eb1d"
    );
  }
}

function connectWallet() {
  if (typeof ethereum === "undefined") {
    return showMsg(noAddrMsg);
  }

  ethereum
    .request({ method: "eth_requestAccounts" })
    .then((accounts) => {
      myAddr = accounts[0];
      $(".account-address").html(getLink(myAddr));
      $(".my-address").html(getLink(myAddr));

      $("#connect-btn").css("display", "none");
      $("#meta-connect-btn").css("display", "none");

      loadWeb3();
      watchChainAccount();
      startApp();
      //   $("#div-mintable").show();
      //   isMintingAvailable(true);
    })
    .catch((err) => {
      //   isMintingAvailable(false);
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log("Please connect to Your wallet!");
      } else {
        console.error(err);
      }
    });
}

// Free Mint
async function isMintingAvailable(iswalletconnected) {
  try {
    const isimintable = await fetchIsMintable();

    // console.log('isimintable : ' + isimintable);
    // console.log('iswalletconnected : ' + iswalletconnected);
    const claimTimeLock = await fetchClaimTimeLock();
    const claimTimeLockDate = new Date(claimTimeLock * 1000);

    const MintableTime = document.getElementById("free-minting-disable");
    const breakTime =
      '<p style="font-size:30px; color:orange;"><b> Break Time ~~!! </b></p>';
    MintableTime.innerHTML =
      breakTime +
      '<p style="color:white"><b>Free Minting available time :</b>' +
      claimTimeLockDate +
      "</p>";

    // if(iswalletconnected){
    if (isimintable) {
      $("#div-roundinfo").show();
      $("#div-mintable").show();
      $("#free-minting-disable").hide();
      $("#div-mintable").show();
      await fetchRoundInfo();
    } else {
      $("#div-roundinfo").hide();
      $("#div-mintable").hide();
      $("#free-minting-disable").show();
      $("#free-minting-available").hide();
    }

    if (iswalletconnected) {
      $("#free-minting-available").show();
    } else {
      $("#free-minting-available").hide();
    }
    // }else{
    //     $("#free-minting-disable").hide();
    //     $("#free-minting-available").hide();
    // }
  } catch (err) {
    console.log(err);
  }
}

async function startApp() {
  // console.log('startApp')
  try {
    var currentChainId = await web3.eth.getChainId();
    //var currentChainId = parseInt(await ethereum.request({method: "eth_chainId"}));
    // $(".networkName").html(networkList[currentChainId]);
    // if (
    //   currentChainId != 1 &&
    //   currentChainId != 4 &&
    //   currentChainId != 5 &&
    //   currentChainId != 137 &&
    //   currentChainId != 80001
    // ) {
    //   // var wrongChainMsg = "This site only works with " + networkList[1] + " or " + networkList[4] + ".<br> Please change the network of your Dapp browser.";
    //   // showMsg(wrongChainMsg, true);
    //   watchChainAccount();
    //   return;
    // }
    chainId = currentChainId;
    await getAccount();
    showWinnerCard();
    if (chainId != 137 && chainId != 80001) {
      await fetchStakingInfo();
    }

    // initializeClock();
  } catch (err) {
    console.log(err);
  }
}

async function getAccount() {
  try {
    getContracts();
    web3.currentProvider.on("accountsChanged", (accounts) => {
      console.log("getAccount accountsChanged");
      initStakingBody();
      startApp();
      // showMsg("<p>Your account has been changed!</p><button onclick='location.reload()'>Reload</button>");
    });
    web3.currentProvider.on("chainChanged", (chainId) => {
      console.log("getAccount chainChanged");
      initStakingBody();
      startApp();
      // showMsg("<p>Network (Chain) has been changed!</p><button onclick='location.reload()'>Reload</button>");
    });

    var accounts = await web3.eth.getAccounts();
    console.log("getAccount() => chainId => ", chainId);
    if (accounts.length > 0) {
      // myAddr = web3.utils.toChecksumAddress(accounts[0]);
      myAddr = accounts[0];
      if (chainId === 137 || chainId === 80001) {
        $("#metaverse-loading").show();
        $(".my-address").html(getLink(myAddr));
        showMetaverseCardList("metaverse");
        $("#connect-btn").hide();
        $("#meta-connect-btn").hide();

        $("#metaverse-body").show();
      } else {
        $(".account-address").html(getLink(myAddr));
        $("#connect-btn").hide();
        $("#meta-connect-btn").hide();

        // isMintingAvailable(true);
        // $("#btnTopAllow").show();
        $("#stake-loading").show();
        getApproved("leedoVault");
        getUnstakedBalance(-1);
        getStakedBalance(-1);
        getRewardsBalance();
        showCardList(stakeKind);
        setRewardsClaimBtn();
      }
    } else {
      $("#connect-btn").show();
      $("#meta-connect-btn").show();
      $("#metaverse-body").hide();
      $("#metaverse-loading").hide();

      // isMintingAvailable(false);
      // $("#btnTopAllow").hide();
      console.log("No ethereum account is available!");
    }
  } catch (err) {
    $("#connect-btn").show();
    $("#meta-connect-btn").show();
    // isMintingAvailable(false);
    $("#stake-loading").hide();
    $("#metaverse-loading").hide();
    $("#metaverse-body").hide();

    console.log(err);
  }
}

function watchChainAccount() {
  web3.currentProvider.on("accountsChanged", (accounts) => {
    initStakingBody();
    startApp();
    // showMsg("<p>Your account has been changed!</p><button onclick='location.reload()'>Reload</button>");
  });
  web3.currentProvider.on("chainChanged", (chainId) => {
    initStakingBody();
    startApp();
    // showMsg("<p>Network (Chain) has been changed!</p><button onclick='location.reload()'>Reload</button>");
    // console.log('aa');
  });
}

function initStakingBody() {
  $("#staking-body").hide();
  unstakedIds = [];
  stakedIds = [];
}

function showMsg(msg, hideClose) {
  $("#msgAlert").html(msg);
  if (hideClose) {
    $("#msgAlert").modal({
      escapeClose: false,
      clickClose: false,
      showClose: false,
    });
  } else {
    $("#msgAlert").modal();
  }
}

async function getContracts() {
  try {
    if (chainId == 1) {
      nftAddress = "0xBE5C953DD0ddB0Ce033a98f36C981F1B74d3B33f";
      nftAbi = [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "_MINT_START_TIME",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "_lastClaims",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "_seeds",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "claim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "claimTimeLock",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "getApproved",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getConsonants",
          outputs: [{ internalType: "string[3]", name: "", type: "string[3]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getConsonantsIndex",
          outputs: [{ internalType: "uint8[3]", name: "", type: "uint8[3]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getGenes",
          outputs: [{ internalType: "uint8[8]", name: "", type: "uint8[8]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getMaxSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getSeed",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "isMintable",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "ownerClaim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "bytes", name: "_data", type: "bytes" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
          name: "tokenByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "tokenOfOwnerByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];

      leedoerc20Address = "0x3eede143adb9a80c6a44c63dad76269d33e2c8d1";
      leedoerc20Abi = [
        {
          inputs: [
            { internalType: "address", name: "_nftAddress", type: "address" },
            {
              internalType: "address",
              name: "_raffleAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "calcRewards",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
          ],
          name: "claim",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "claimBlocksRequired",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "claimCount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          name: "claims",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "daoAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "daoInitialized",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "daoMint",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoMintableAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_season", type: "uint256" },
          ],
          name: "daoSetSeason",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoTimelock",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_daoAddress", type: "address" },
          ],
          name: "initializeDao",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "marketingMintableAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_devAddr", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "mintDev",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_to", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "mintNftVaultRewards",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "mintRafflePrize",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftMintableWeiAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftVaultAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "raffleAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rafflePrize",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "season",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_daoAddress", type: "address" },
          ],
          name: "setDaoAddr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "setDaoMintable",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_newAddress", type: "address" },
          ],
          name: "setNftAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_vault", type: "address" },
          ],
          name: "setNftVaultAddr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_vault", type: "address" },
          ],
          name: "setNftVaultAddrByDao",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "timeLockDuration",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "unlockDaoMint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];

      leedovaultAddress = "0x0866f2af4cf0b601A1a2c4eBD56CBB954a1cF004";
      leedovaultAbi = [
        {
          inputs: [
            { internalType: "address", name: "_nftAddress", type: "address" },
            { internalType: "address", name: "_erc20Address", type: "address" },
            {
              internalType: "address",
              name: "_bridgeAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "bridgeAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "calcBridgeRewards",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "calcRewards",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "claimRewards",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "daoInitialized",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "erc20Addr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "expiration",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "getApproved",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getConsonants",
          outputs: [{ internalType: "string[3]", name: "", type: "string[3]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getConsonantsIndex",
          outputs: [{ internalType: "uint8[3]", name: "", type: "uint8[3]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getGenes",
          outputs: [{ internalType: "uint8[8]", name: "", type: "uint8[8]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_daoAddress", type: "address" },
          ],
          name: "initializeDao",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "lastBlocks",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "bytes", name: "", type: "bytes" },
          ],
          name: "onERC721Received",
          outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rate",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "bytes", name: "_data", type: "bytes" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "_bool", type: "bool" }],
          name: "setAllowTransfer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_bridgeAddress",
              type: "address",
            },
          ],
          name: "setBridgeAddr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_bridgeAddress",
              type: "address",
            },
          ],
          name: "setBridgeAddrByDao",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_daoAddress", type: "address" },
          ],
          name: "setDaoAddr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_erc20Address", type: "address" },
          ],
          name: "setErc20Addr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_erc20Address", type: "address" },
          ],
          name: "setErc20AddrByDao",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_expiration", type: "uint256" },
          ],
          name: "setExpiration",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "_rate", type: "uint256" }],
          name: "setRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" },
          ],
          name: "stake",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_count", type: "uint256" },
          ],
          name: "stakeByCount",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
          name: "tokenByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "tokenOfOwnerByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_account", type: "address" },
          ],
          name: "tokensOf",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "totalClaims",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "transferAllowed",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
          ],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];

      utilityAddress = "0x4539aa65c20644d195ca35c592308970377fea23";
      utilityAbi = [
        {
          inputs: [
            { internalType: "address", name: "_nftAddr", type: "address" },
            { internalType: "address", name: "_nftVaultAddr", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "nftAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftVaultAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_account", type: "address" },
            { internalType: "bool", name: "staked", type: "bool" },
          ],
          name: "tokensOf",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "view",
          type: "function",
        },
      ];
    } else if (chainId == 4) {
      nftAddress = "0x0ECA0A58018c19eD934a6527E31e585F1F1Bd653";
      nftAbi = [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "_MINT_START_TIME",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "_lastClaims",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "_seeds",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "claim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "claimTimeLock",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "getApproved",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getConsonants",
          outputs: [{ internalType: "string[3]", name: "", type: "string[3]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getConsonantsIndex",
          outputs: [{ internalType: "uint8[3]", name: "", type: "uint8[3]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getGenes",
          outputs: [{ internalType: "uint8[8]", name: "", type: "uint8[8]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getMaxSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getSeed",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "isMintable",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "ownerClaim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "bytes", name: "_data", type: "bytes" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
          name: "tokenByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "tokenOfOwnerByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];

      leedoerc20Address = "0xFC8786978C714B0f279Bb9D85C57B618670302cc";
      leedoerc20Abi = [
        {
          inputs: [
            { internalType: "address", name: "_nftAddress", type: "address" },
            {
              internalType: "address",
              name: "_raffleAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "calcRewards",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
          ],
          name: "claim",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "claimBlocksRequired",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "claimCount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          name: "claims",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "daoAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "daoInitialized",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "daoMint",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoMintableAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_season", type: "uint256" },
          ],
          name: "daoSetSeason",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoTimelock",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_daoAddress", type: "address" },
          ],
          name: "initializeDao",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "marketingMintableAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_devAddr", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "mintDev",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_to", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "mintNftVaultRewards",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "mintRafflePrize",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftMintableWeiAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftVaultAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "raffleAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rafflePrize",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "season",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_daoAddress", type: "address" },
          ],
          name: "setDaoAddr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "setDaoMintable",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_newAddress", type: "address" },
          ],
          name: "setNftAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_vault", type: "address" },
          ],
          name: "setNftVaultAddr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_vault", type: "address" },
          ],
          name: "setNftVaultAddrByDao",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "timeLockDuration",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "unlockDaoMint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];

      leedovaultAddress = "0x106899D511D0069BA1E80E22a979EE382Ee06B90";
      leedovaultAbi = [
        {
          inputs: [
            { internalType: "address", name: "_nftAddress", type: "address" },
            { internalType: "address", name: "_erc20Address", type: "address" },
            {
              internalType: "address",
              name: "_bridgeAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "bridgeAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "calcBridgeRewards",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "calcRewards",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "claimRewards",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "daoInitialized",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "erc20Addr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "expiration",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "getApproved",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getConsonants",
          outputs: [{ internalType: "string[3]", name: "", type: "string[3]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getConsonantsIndex",
          outputs: [{ internalType: "uint8[3]", name: "", type: "uint8[3]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getGenes",
          outputs: [{ internalType: "uint8[8]", name: "", type: "uint8[8]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_daoAddress", type: "address" },
          ],
          name: "initializeDao",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "lastBlocks",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "bytes", name: "", type: "bytes" },
          ],
          name: "onERC721Received",
          outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rate",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "bytes", name: "_data", type: "bytes" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "_bool", type: "bool" }],
          name: "setAllowTransfer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_bridgeAddress",
              type: "address",
            },
          ],
          name: "setBridgeAddr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_bridgeAddress",
              type: "address",
            },
          ],
          name: "setBridgeAddrByDao",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_daoAddress", type: "address" },
          ],
          name: "setDaoAddr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_erc20Address", type: "address" },
          ],
          name: "setErc20Addr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_erc20Address", type: "address" },
          ],
          name: "setErc20AddrByDao",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_expiration", type: "uint256" },
          ],
          name: "setExpiration",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "_rate", type: "uint256" }],
          name: "setRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" },
          ],
          name: "stake",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_count", type: "uint256" },
          ],
          name: "stakeByCount",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
          name: "tokenByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "tokenOfOwnerByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_account", type: "address" },
          ],
          name: "tokensOf",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "totalClaims",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "transferAllowed",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
          ],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];

      utilityAddress = "0x3F33B14a1C18BE389b36AE5f30368EeAf3179550";
      utilityAbi = [
        {
          inputs: [
            { internalType: "address", name: "_nftAddr", type: "address" },
            { internalType: "address", name: "_nftVaultAddr", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "nftAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftVaultAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_account", type: "address" },
            { internalType: "bool", name: "staked", type: "bool" },
          ],
          name: "tokensOf",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "view",
          type: "function",
        },
      ];
    } else if (chainId == 5) {
      nftAddress = "0xC814aFD17170d2A8c02C9f0E8B7bA8Bf96aB75Ff";
      nftAbi = [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "_MINT_START_TIME",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "_lastClaims",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "_seeds",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "claim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "claimTimeLock",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "getApproved",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getConsonants",
          outputs: [{ internalType: "string[3]", name: "", type: "string[3]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getConsonantsIndex",
          outputs: [{ internalType: "uint8[3]", name: "", type: "uint8[3]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getGenes",
          outputs: [{ internalType: "uint8[8]", name: "", type: "uint8[8]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getMaxSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getSeed",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "isMintable",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "ownerClaim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "bytes", name: "_data", type: "bytes" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
          name: "tokenByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "tokenOfOwnerByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];

      leedoerc20Address = "0xbC66FB9821A757a684364266Fb856513A189dbF7";
      leedoerc20Abi = [
        {
          inputs: [
            { internalType: "address", name: "_nftAddr", type: "address" },
            { internalType: "address", name: "_raffleAddr", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "calcRewards",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
          ],
          name: "claim",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "claimBlocksRequired",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "claimCount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          name: "claims",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "daoAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "daoInitialized",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "daoMint",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoMintableAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_season", type: "uint256" },
          ],
          name: "daoSetSeason",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoTimelock",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_daoAddr", type: "address" },
          ],
          name: "initializeDao",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "marketingMintableAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_devAddr", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "mintDev",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "mintNftStaking",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "mintRafflePrize",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftMintableAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftVaultAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "raffleAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rafflePrize",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "season",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_daoAddr", type: "address" },
          ],
          name: "setDaoAddr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "setDaoMintable",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_newAddr", type: "address" },
          ],
          name: "setNftAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_vault", type: "address" },
          ],
          name: "setNftVaultAddr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "timeLockDuraction",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "unlockDaoMint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];

      leedovaultAddress = "0xBF6CC26C2cA10B59AA68fca6EdAc0773cE306c97";
      leedovaultAbi = [
        {
          inputs: [
            { internalType: "address", name: "_nftAddr", type: "address" },
            { internalType: "address", name: "_erc20Addr", type: "address" },
            { internalType: "address", name: "_bridgeAddr", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "bridgeAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "calcBridgeRewards",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "calcRewards",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "claimRewards",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "daoInitialized",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "erc20Addr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "expiration",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "getApproved",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_daoAddr", type: "address" },
          ],
          name: "initializeDao",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "lastBlocks",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "bytes", name: "", type: "bytes" },
          ],
          name: "onERC721Received",
          outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rate",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "bytes", name: "_data", type: "bytes" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "_bool", type: "bool" }],
          name: "setAllowTransfer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_daoAddr", type: "address" },
          ],
          name: "setDaoAddr",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_expiration", type: "uint256" },
          ],
          name: "setExpiration",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "_rate", type: "uint256" }],
          name: "setRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" },
          ],
          name: "stake",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "count", type: "uint256" }],
          name: "stakeByCount",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
          name: "tokenByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "tokenOfOwnerByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "tokensOf",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "totalClaims",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "transferAllowed",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" },
          ],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];

      utilityAddress = "0xf1E04195aeFA3F8E979f8b8467D30B81a9bA46E2";
      utilityAbi = [
        {
          inputs: [
            { internalType: "address", name: "_nftAddr", type: "address" },
            { internalType: "address", name: "_nftVaultAddr", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "nftAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nftVaultAddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_account", type: "address" },
            { internalType: "bool", name: "staked", type: "bool" },
          ],
          name: "tokensOf",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "view",
          type: "function",
        },
      ];
    } else if (chainId == 137) {
      // Matic Polygon mainnet
    } else if (chainId == 80001) {
      // Matic Mombai testnet
      leedorianAddress = "0x27A3e1e71B6f4C8f388e55C01c8Bb49139492071";
      leedorianAbi = [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Paused",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Unpaused",
          type: "event",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
            { internalType: "address[]", name: "_addrs", type: "address[]" },
          ],
          name: "add",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "_addr", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address[]", name: "_froms", type: "address[]" },
            { internalType: "address[]", name: "_tos", type: "address[]" },
            { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
          ],
          name: "bulkTransfer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getConsonants",
          outputs: [{ internalType: "string[3]", name: "", type: "string[3]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getConsonantsIndex",
          outputs: [{ internalType: "uint8[3]", name: "", type: "uint8[3]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "getGenes",
          outputs: [{ internalType: "uint8[8]", name: "", type: "uint8[8]" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "paused",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "_tokenIds", type: "uint256[]" },
          ],
          name: "remove",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "_addr", type: "address" }],
          name: "tokensOf",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_from", type: "address" },
            { internalType: "address", name: "_to", type: "address" },
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "unpause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
    }

    if (chainId === 1 || chainId === 4 || chainId === 5) {
      nftContract = new web3.eth.Contract(nftAbi, nftAddress);
      leedoerc20Contract = new web3.eth.Contract(
        leedoerc20Abi,
        leedoerc20Address
      );
      leedovaultContract = new web3.eth.Contract(
        leedovaultAbi,
        leedovaultAddress
      );

      utilityContract = new web3.eth.Contract(utilityAbi, utilityAddress);
      $(".nft-address").html(getLink(nftAddress));
      $(".leedoerc20-address").html(getLink(leedoerc20Address));
      $(".leedovault-address").html(getLink(leedovaultAddress));
    } else if (chainId === 137 || chainId === 80001) {
      console.log("getContract");
      leedorianContract = new web3.eth.Contract(leedorianAbi, leedorianAddress);
      $(".leedorian-address").html(getLink(leedorianAddress));
    }
  } catch (err) {
    console.log(err);
  }
}

async function mint() {
  $("#loading").show();
  $("#div-mint-result").hide();
  // $("#mint-btn").hide();
  nftContract.methods
    .claim()
    .send({ from: myAddr })
    .on("transactionHash", (txid) => {
      // console.log(`txid: ${txid}`)
    })
    .once("allEvents", (allEvents) => {
      // console.log('allEvents')
      // console.log(transferEvent)
    })
    .once("Transfer", (transferEvent) => {
      // console.log('trasferEvent', transferEvent)
    })
    .once("receipt", (receipt) => {
      $("#loading").hide();
      $("#div-mint-result").show();
      // console.log('receipt')
      // console.log(receipt)
      if (receipt.status) {
        showCard();
      }
    })
    .on("error", (error) => {
      $("#loading").hide();
      // $("#mint-btn").show();
      console.log(error);
      // $(`#pending-sendDkey-tx`).html('(Transaction fail!)');
      // $(`#pending-sendDkey-tx`).css('color', 'red');
    });
}

showCard = async () => {
  await fetchRoundInfo();
  const tokenId = await getLatestCardTokenId();
  const { name, description, image } = await getCardInfo(tokenId, "unstaked");
  // console.log(`name: ${name}, description: ${description}, image: ${image}`)
  // Opensea url link

  var cardInifo =
    "<p><b>[ Result ] Token ID :  #<b>" +
    tokenId +
    "</p>" +
    '<img style="width: auto; height: auto; max-height: 300px; "  src="' +
    image +
    '"/>' +
    '<p style="text-align:center;margin-top:10px"><a href="https://opensea.io/assets/0xbe5c953dd0ddb0ce033a98f36c981f1b74d3b33f/' +
    tokenId +
    '" target="_blank">' +
    "View in OpenSea </a></p>";
  $(".mint-result").html(cardInifo);
  // return {tokenId, image}
  return;
};

async function fetchStakingInfo() {
  // total supply, staking  count
  const totalSupply = await fetchTotalSupply();
  const stakingNumber = await stakedCount();

  const stakinginfo =
    '<p style="margin-bottom:0px;"><b>' +
    stakingNumber +
    " cards staked of " +
    totalSupply +
    " cards </b></p>" +
    '<progress class="staking-progress" value="' +
    stakingNumber +
    '" max="' +
    totalSupply +
    '"></progress>';

  $(".stakinginfo").html(stakinginfo);
  return;
}
async function stakedCount() {
  return leedovaultContract.methods.totalSupply().call();
}

async function unstakedCount() {
  return nftContract.methods.balanceOf(myAddr).call();
}

// kind : unstaked / staked
async function listTabData() {
  $("#div-mint-result").hide();
  let kind = "unstaked";
  // $("#mint-btn").hide();
  // console.log('kind => '+kind);
  // console.log('document.getElementById("tab1").checked => ',document.getElementById("tab1").checked);
  // console.log('document.getElementById("tab2").checked => ',document.getElementById("tab2").checked);
  if (document.getElementById("tab1").checked) {
    kind = "unstaked";
  } else {
    kind = "staked";
  }
  stakeKind = kind;
  showCardList(stakeKind);
}

showCardList = async (kind) => {
  $("#stake-loading").show();
  await fetchStakingInfo();

  let tokenId = [];
  let myAddrBalanceOf = 0;
  checkInTokenIdList = [];
  console.log("myAddr => ", myAddr);

  switch (kind) {
    case "unstaked":
      // const tokenId = await getCardTokenId();
      // console.log('myAddr => ',myAddr)
      myAddrBalanceOf = unstaked_cards;
      //
      // tokenByIndexList();
      if (unstakedIds.length == 0) {
        unstakedIds = await utilityContract.methods
          .tokensOf(myAddr, false)
          .call();
        tokenId = unstakedIds;
        // console.log('unstakedIds =>',unstakedIds);
      } else {
        tokenId = unstakedIds;
      }
      // console.log('tokenId => ', tokenId);

      break;
    case "staked":
      myAddrBalanceOf = staked_cards;
      if (stakedIds.length == 0) {
        stakedIds = await utilityContract.methods.tokensOf(myAddr, true).call();
        tokenId = stakedIds;
        // console.log('stakedIds =>',stakedIds);
      } else {
        tokenId = stakedIds;
      }
      // console.log('tokenId => ', tokenId);

      break;
  }
  // console.log('myAddrBalanceOf => ',myAddrBalanceOf) //9

  // tokenId = await nftContract.methods.tokenOfOwnerByIndex(myAddr).call();
  // tokenId = [10,11,12,13,14,15,16,17,18,19,20] //test date
  // let tokenId = 610
  // console.log('tokenId =>' , tokenId)
  //
  // const {name, description, image} = await getCardInfo(tokenId);
  // console.log(`name: ${name}, description: ${description}, image: ${image}`)
  let arr = [];
  // for(i=0 ; i < tokenId.length ; i++){
  //     const {image} = await getCardInfo(tokenId[i]);
  //     arr.push({tokenId : tokenId[i], image : image})
  // }
  const cardInfoList = await Promise.all(
    tokenId.map((id) => {
      // console.log('aaaaa => ',getCardInfo(id))
      return getCardInfo(id, kind);
    })
  );
  cardInfoList.forEach((info, i) => {
    arr.push({ tokenId: tokenId[i], image: info.image });
  });

  arr.sort(function (a, b) {
    return parseFloat(a.tokenId) - parseFloat(b.tokenId);
  });

  console.log(arr);
  function Deck(arr) {
    document.getElementById("deck").innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      let card = document.createElement("div");
      let imgBox = document.createElement("div");
      let descriptionBox = document.createElement("div");
      let tokenId = document.createElement("div");
      let checkBox = document.createElement("div");
      card.className = "card";
      imgBox.className = "imgbox";
      descriptionBox.className = "descriptionBox";
      tokenId.className = "tokenID";
      checkBox.className = "checkBox";

      imgBox.innerHTML =
        '<img style="width: auto; height: auto; max-width: 200px; "  src="' +
        arr[i].image +
        '"/>';
      tokenId.innerHTML = "#" + arr[i].tokenId;
      checkBox.innerHTML = `<input style="width:20px;height:20px; " type="checkbox"  value="${arr[i].tokenId}" onclick ="checkBoxClick(this)"/>`;
      card.appendChild(imgBox);
      card.appendChild(descriptionBox);
      descriptionBox.appendChild(tokenId);
      descriptionBox.appendChild(checkBox);

      document.getElementById("deck").appendChild(card);
    }
  }

  Deck(arr);
  switch (kind) {
    case "unstaked":
      document.getElementById("deck-title").innerHTML =
        '<p style="text-align:center; margin-top:10px; margin-bottom:0px;"><b>Check-in now</b></p>';
      break;
    case "staked":
      document.getElementById("deck-title").innerHTML =
        '<p style="text-align:center; margin-top:10px; margin-bottom:0px;"><b>Check-out now</b></p>';
      break;
  }
  document.getElementById("deck-selected-cnt").innerHTML =
    '<p style="margin-bottom: 5px;font-size: 12px; color: #818181;">( 0 / 20 ) Maximum 20 cards per transaction.</p>';

  $("#stake-loading").hide();
  $("#staking-body").show();

  checkInBody(kind);
};

checkBoxClick = (e) => {
  // console.log(e)
  // console.log(e.checked)
  // console.log(e.value)
  if (e.checked) {
    if (checkInTokenIdList.length == 20) {
      alert("You can select up to 20.");
      e.checked = false;
    } else {
      const target = document.getElementById("stake-btn");
      target.disabled = false;
      checkInTokenIdList.push(e.value);
    }
  } else {
    // console.log(checkInTokenIdList)
    // checkInTokenIdList.indexOf(e.value);
    checkInTokenIdList.splice(checkInTokenIdList.indexOf(e.value), 1);
    if (checkInTokenIdList.length == 0) {
      const target = document.getElementById("stake-btn");
      target.disabled = true;
    } else {
      const target = document.getElementById("stake-btn");
      target.disabled = false;
    }
  }

  document.getElementById("deck-selected-cnt").innerHTML =
    '<p style="margin-bottom: 5px;font-size: 12px; color: #818181;">( ' +
    checkInTokenIdList.length +
    " / 20 ) Maximum 20 cards per transaction.</p>";
  // console.log('checkInTokenIdList =>',checkInTokenIdList)
};

function checkInBody(kind) {
  document.getElementById("stake-btn-div").innerHTML = "";
  let stakeBtn = document.createElement("div");
  // console.log('is_Vault_Approved =>', is_Vault_Approved)  ;
  if (is_Vault_Approved) {
    switch (stakeKind) {
      case "unstaked":
        stakeBtn.innerHTML =
          '<button style="margin-top:10px" id="stake-btn" disabled onclick="checkIn()">Check-in</button>';

        break;
      case "staked":
        stakeBtn.innerHTML =
          '<button  style="margin-top:10px" id="stake-btn" disabled onclick="checkOut()">Check-out</button>';

        break;
    }
  } else {
    stakeBtn.innerHTML =
      '<button  style="margin-top:10px" id="stake-btn" onclick="setVaultApproved(true)">Approve</button>';
  }
  document.getElementById("stake-btn-div").appendChild(stakeBtn);
}

function setRewardsClaimBtn() {
  // console.log('screen width =>', document.body.clientWidth);
  const screenWidth = document.body.clientWidth;
  let claimBtn = document.createElement("div");

  claimBtn.innerHTML =
    '<button id="claim-btn" onclick="runRewardsClaim()">Claim</button>';

  if (screenWidth < 600) {
    document.getElementById("erc20-claim-div-m").innerHTML = "";
    document.getElementById("erc20-claim-div-m").appendChild(claimBtn);
  } else {
    document.getElementById("erc20-claim-div").innerHTML = "";
    document.getElementById("erc20-claim-div").appendChild(claimBtn);
  }
}
async function getApproved(_contract) {
  // console.log('getApproved');
  switch (_contract) {
    case "leedoErc20":
      is_ERC20_Approved = await nftContract.methods
        .isApprovedForAll(myAddr, leedoerc20Address)
        .call();
      // console.log('is_ERC20_Approved => ' ,is_ERC20_Approved);
      break;
    case "leedoVault":
      is_Vault_Approved = await nftContract.methods
        .isApprovedForAll(myAddr, leedovaultAddress)
        .call();
      // console.log('is_Vault_Approved => ' ,is_Vault_Approved);
      break;
  }

  return;
}

async function getUnstakedBalance(_cards) {
  // console.log('getUnstakedBalance');
  if (_cards == -1) {
    _cards = await nftContract.methods.balanceOf(myAddr).call();
    // console.log(_cards);
  }
  unstaked_cards = _cards;
  $(".unstaked-cards").html(_cards);
  return;
}

async function getStakedBalance(_cards) {
  console.log("getStakedBalance");
  if (_cards == -1) {
    _cards = await leedovaultContract.methods.balanceOf(myAddr).call();
    // console.log(_cards);
  }
  staked_cards = _cards;
  $(".staked-cards").html(_cards);

  return;
}

async function setVaultApproved(_approve) {
  // console.log('setVaultApproved');
  const target = document.getElementById("stake-btn");
  target.disabled = true;
  $("#stake-loading").show();
  nftContract.methods
    .setApprovalForAll(leedovaultAddress, _approve)
    .send({ from: myAddr })
    .on("transactionHash", (txid) => {
      // console.log(`txid: ${txid}`)
    })
    .once("allEvents", (allEvents) => {
      // console.log('allEvents')
      // console.log(transferEvent)
    })
    .once("Transfer", (transferEvent) => {
      // console.log('trasferEvent', transferEvent)
    })
    .once("receipt", (receipt) => {
      // console.log('receipt')
      // console.log(receipt)
      if (receipt.status) {
        is_Vault_Approved = _approve;
        showCardList(stakeKind);
      }
    })
    .on("error", (error) => {
      target.disabled = false;
      $("#stake-loading").hide();
      // $("#loading").hide();
      // $("#mint-btn").show();
      console.log(error);
    });
}

async function checkIn() {
  console.log("checkIn");
  $("#stake-loading").show();
  const target = document.getElementById("stake-btn");
  target.disabled = true;
  //checkInTokenIdList
  leedovaultContract.methods
    .stake(checkInTokenIdList)
    .send({ from: myAddr })
    .on("transactionHash", (txid) => {
      // console.log(`txid: ${txid}`)
    })
    .once("allEvents", (allEvents) => {
      // console.log('allEvents')
      // console.log(transferEvent)
    })
    .once("Transfer", (transferEvent) => {
      // console.log('trasferEvent', transferEvent)
    })
    .once("receipt", (receipt) => {
      // console.log('receipt')
      // console.log(receipt)
      if (receipt.status) {
        // update card count / card list
        unstaked_cards = Number(unstaked_cards) - checkInTokenIdList.length;
        staked_cards = Number(staked_cards) + checkInTokenIdList.length;
        checkInTokenIdList = [];
        stakedIds = [];
        unstakedIds = [];
        getUnstakedBalance(unstaked_cards);
        getStakedBalance(staked_cards);
        getRewardsBalance();

        showCardList(stakeKind);
      }
    })
    .on("error", (error) => {
      target.disabled = false;
      $("#stake-loading").hide();
      // $("#loading").hide();
      // $("#mint-btn").show();
      console.log(error);
    });
}

async function checkOut() {
  console.log("checkOut");
  $("#stake-loading").show();
  const target = document.getElementById("stake-btn");
  target.disabled = true;
  //checkInTokenIdList
  leedovaultContract.methods
    .withdraw(checkInTokenIdList)
    .send({ from: myAddr })
    .on("transactionHash", (txid) => {
      // console.log(`txid: ${txid}`)
    })
    .once("allEvents", (allEvents) => {
      // console.log('allEvents')
      // console.log(transferEvent)
    })
    .once("Transfer", (transferEvent) => {
      // console.log('trasferEvent', transferEvent)
    })
    .once("receipt", (receipt) => {
      /                        / / console.log("receipt");
      // console.log(receipt)
      if (receipt.status) {
        // update card count / card list
        unstaked_cards = Number(unstaked_cards) + checkInTokenIdList.length;
        staked_cards = Number(staked_cards) - checkInTokenIdList.length;

        checkInTokenIdList = [];
        stakedIds = [];
        unstakedIds = [];
        getUnstakedBalance(unstaked_cards);
        getStakedBalance(staked_cards);
        getRewardsBalance();

        showCardList(stakeKind);
      }
    })
    .on("error", (error) => {
      target.disabled = false;
      $("#stake-loading").hide();
      // $("#loading").hide();
      // $("#mint-btn").show();
      console.log(error);
      // $(`#pending-sendDkey-tx`).html('(Transaction fail!)');
      // $(`#pending-sendDkey-tx`).css('color', 'red');
    });
}

async function getRewardsBalance() {
  clearInterval(RewardCounterInterval);
  // console.log('getRewardsBalance => ', myAddr);
  // const {ethers} = require('ethers');

  let reWards_wei = await leedovaultContract.methods.calcRewards(myAddr).call();
  let total_reWards_wei = await leedovaultContract.methods
    .totalClaims(myAddr)
    .call();
  // console.log('reWards_wei => ',reWards_wei);

  // let reWards_gwei = Math.round(reWards_wei)/1000000000000000000;
  // console.log('reWards_gwei => ',reWards_gwei);

  let reWards_gwei = ethers.utils.formatUnits(reWards_wei, 18);
  let total_reWards_gwei = ethers.utils.formatUnits(total_reWards_wei, 18);
  // console.log('ether_reWards_gwei => ',ether_reWards_gwei);

  runRewardCounter(reWards_gwei);

  reWards_gwei = reWards_gwei
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  total_reWards_gwei = total_reWards_gwei
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  $(".erc20-rewards").html(reWards_gwei);
  $(".erc20-claimed-rewards").html(total_reWards_gwei);

  $("#claimed-rewards-div").hide();
  $("#claimed-rewards-big-div").show();

  setTimeout(() => {
    $("#claimed-rewards-div").show();
    $("#claimed-rewards-big-div").hide();
  }, 10000);

  return;
}

function runRewardCounter(cur_balance) {
  /*
                    rewards per block 5194874553201880 (wei)
                    1 block = 13sec
                    display unit : ETH ( wei to ETH : 1000000000000000000 )
                */
  let _balance = parseFloat(cur_balance);
  const blockRewards = (0.00519487455320188 / 13.5) * staked_cards;
  // Test
  // _balance=0;
  // const blockRewards  = (0.00519487455320188 / 13) * 1;
  const target = document.getElementById("claim-btn");
  // console.log('runRewardCounter cur_balance => ', _balance);
  // console.log('runRewardCounter staked_cards => ', staked_cards);
  if (staked_cards > 0) {
    target.disabled = false;
    RewardCounterInterval = setInterval(function () {
      _balance = _balance + blockRewards;
      _balance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
      $(".erc20-rewards").html(_balance);
    }, 1000);
  } else {
    if (_balance > 0) {
      target.disabled = false;
    } else {
      target.disabled = true;
    }
  }
}

async function setErc20Approved(_approve) {
  // console.log('setVaultApproved');
  const target = document.getElementById("claim-btn");
  target.disabled = true;
  nftContract.methods
    .setApprovalForAll(leedoerc20Address, _approve)
    .send({ from: myAddr })
    .on("transactionHash", (txid) => {
      // console.log(`txid: ${txid}`)
      // $(`#sendDkey-tx`).html(`Transaction Info txid: ${getLink(txid)}<span id="pending-sendDkey-tx" style="color:red;"><img src="spin.gif">블록체인 컨펌 대기중...</span>`);
    })
    .once("allEvents", (allEvents) => {
      // console.log('allEvents')
      // console.log(transferEvent)
    })
    .once("Transfer", (transferEvent) => {
      // console.log('trasferEvent', transferEvent)
    })
    .once("receipt", (receipt) => {
      // console.log('receipt')
      // console.log(receipt)
      if (receipt.status) {
        is_ERC20_Approved = _approve;
      }
    })
    .on("error", (error) => {
      target.disabled = false;
      $("#stake-loading").hide();
      // $("#loading").hide();
      // $("#mint-btn").show();
      console.log(error);
      // $(`#pending-sendDkey-tx`).html('(Transaction fail!)');
      // $(`#pending-sendDkey-tx`).css('color', 'red');
    });
}

async function runRewardsClaim() {
  console.log("runRewardsClaim");
  $("#stake-loading").show();
  const target = document.getElementById("claim-btn");
  target.disabled = true;
  leedovaultContract.methods
    .claimRewards()
    .send({ from: myAddr })
    .on("transactionHash", (txid) => {
      // console.log(`txid: ${txid}`)
      // $(`#sendDkey-tx`).html(`Transaction Info txid: ${getLink(txid)}<span id="pending-sendDkey-tx" style="color:red;"><img src="spin.gif">블록체인 컨펌 대기중...</span>`);
    })
    .once("allEvents", (allEvents) => {
      // console.log('allEvents')
      // console.log(transferEvent)
    })
    .once("Transfer", (transferEvent) => {
      // console.log('trasferEvent', transferEvent)
    })
    .once("receipt", (receipt) => {
      // console.log('receipt')
      // console.log(receipt)
      if (receipt.status) {
        target.disabled = false;
        getRewardsBalance();
        $("#stake-loading").hide();
      }
    })
    .on("error", (error) => {
      target.disabled = false;
      $("#stake-loading").hide();
      // $("#loading").hide();
      // $("#mint-btn").show();
      console.log(error);
      // $(`#pending-sendDkey-tx`).html('(Transaction fail!)');
      // $(`#pending-sendDkey-tx`).css('color', 'red');
    });
}

async function RequestAddToken() {
  await ethereum
    .request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: leedoerc20Address,
          symbol: "LEEDO",
          decimals: 18,
          image:
            "https://github.com/GoSquidGame/GoSquidGame.github.io/blob/main/docs/leedo_icon.png?raw=true",
        },
      },
    })
    .then((success) => {
      if (success) {
        console.log("LEEDO successfully added to wallet!");
      } else {
        throw new Error("Something went wrong.");
      }
    })
    .catch(console.error);
}

async function showWinnerCard() {
  // $("#winner-loading").show();
  // const winnerTokens=[391,916,889,1289,1948,2660,2925,3584,3823,4409,4628,5400,5858,6107,6205,7319,7321,7791,8452,8652];
  const winnerCards = [
    {
      id: "391",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYxODsgJiMxMjYyMDsgJiMxMjYxNTs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgNTM3NiA0MDE0PC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "916",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYxNTsgJiMxMjY3MTsgJiMxMjYwOTs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgMTAzMSA0NjUzPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "889",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYxMDsgJiMxMjYxODsgJiMxMjYwOTs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgMjMwNCA2NzQzPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "1289",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYyMjsgJiMxMjYxOTsgJiMxMjYxODs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgMjgwNCAyMjM0PC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "1948",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjU5OTsgJiMxMjYwMTsgJiMxMjYxOTs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgNTU2NiA1NjA0PC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "2660",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYxMzsgJiMxMjYxODsgJiMxMjYwOTs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgMTAzNCA2Mjk2PC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "2925",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYxNTsgJiMxMjY3MTsgJiMxMjYwOTs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgOTA3MCAyMTM0PC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "3584",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjU5NjsgJiMxMjU5OTsgJiMxMjYxMzs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgMDE5NSAyMzE2PC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "3823",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYxNTsgJiMxMjY3MTsgJiMxMjYwOTs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgNDQ2NCAyNzMwPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "4409",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYxNTsgJiMxMjY3MTsgJiMxMjYwOTs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgNzMyNSA3NzMxPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "4628",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjU5OTsgJiMxMjYxMDsgJiMxMjY3MTs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgNDE2NyAwMDUyPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "5400",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYxNTsgJiMxMjY3MTsgJiMxMjYwOTs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgMjEwNSA2ODUyPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "5858",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYwMTsgJiMxMjYxMzsgJiMxMjYyMjs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgMTAyOCAxMzMyPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "6107",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYxNjsgJiMxMjYxNTsgJiMxMjU5Mzs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgMDYyNSAwMjA0PC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "6205",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYyMTsgJiMxMjYyMjsgJiMxMjU5Njs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgNDEzMiA3Mjk3PC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "7319",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYwMTsgJiMxMjYyMTsgJiMxMjU5Njs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgNjIwNiAyODEyPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "7321",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYxNTsgJiMxMjY3MTsgJiMxMjYwOTs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgNTM0OSA3NjIyPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "7791",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYyMDsgJiMxMjYxNjsgJiMxMjYxNjs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgMjExNCAyNzYyPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "8452",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYxMDsgJiMxMjU5MzsgJiMxMjYyMTs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgNDMyMiA4NTIwPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      id: "8652",
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMjIwIj48c3R5bGU+LmJhc2Uge2ZvbnQtZmFtaWx5OiBWZXJkYW5hOyBmaWxsOiBibGFjazt9PC9zdHlsZT48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQ0Y5ODU3IiAvPjx0ZXh0IHg9IjUwJSIgeT0iMTAwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBjbGFzcz0iYmFzZSIgc3R5bGU9ImZvbnQtc2l6ZTo3MDAlOyBsZXR0ZXItc3BhY2luZzogLTAuMmVtOyI+JiMxMjYyMjsgJiMxMjYxMzsgJiMxMjYwMTs8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIxODAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGNsYXNzPSJiYXNlIiBzdHlsZT0iZm9udC1zaXplOjE1MCU7Ij4mIzkzNzsgNTg0MyA0NjgwPC90ZXh0Pjwvc3ZnPg==",
    },
  ];
  var htmlStr = "<table>";
  var round_num = 0;
  for (const tokeninfo of winnerCards) {
    // const {name, description, image} = await getCardInfo(tokenid);
    round_num += 1;

    if (round_num % 2 == 1) {
      htmlStr += "<tr>";
    }
    htmlStr += "<td>";
    htmlStr += '<div style="display: flex;">';
    htmlStr +=
      '<p style=" margin-bottom: 0px; ">[ Round ' +
      round_num +
      " ] NFT ID :  #" +
      tokeninfo.id +
      "</p>";
    htmlStr +=
      '<a style="color: blue; text-decoration: underline; margin-left: 20px;" href="https://opensea.io/assets/0xbe5c953dd0ddb0ce033a98f36c981f1b74d3b33f/' +
      tokeninfo.id +
      '" target="_blank">View in OpenSea </a>';
    htmlStr += "</div>";
    htmlStr +=
      '<img style="width: auto; height: auto; max-height: 100px; "  src="' +
      tokeninfo.image +
      '"/>';
    htmlStr += "</td>";
    if (round_num % 2 == 0) {
      htmlStr += "</tr>";
    }
  }

  htmlStr += "</table>";

  $(".round-winner-result").html(htmlStr);
  // $("#winner-loading").hide();
  return;
}

getLatestCardTokenId = async () => {
  // var nid = await this.web3.eth.net.getId();
  // if ( nid !== rootChainID ) {
  // alert("Wrong network. Please change the network into Ethereum")
  //     return
  // }
  var userCardNumber = await nftContract.methods.balanceOf(myAddr).call();
  // console.log(`userCardNumber: ${userCardNumber}`)
  var tokenId = await nftContract.methods
    .tokenOfOwnerByIndex(myAddr, userCardNumber - 1)
    .call();
  // console.log(`tokenId: ${tokenId}`);
  return tokenId;

  // this.setState({
  // userCardNumber: userCardNumber,
  // });

  // var yourCardsListBox = getElem("yourCards")
  // yourCardsListBox.options.length = 0
  // for (let i = 0; i < userCardNumber; i++) {
  //     var opt = document.createElement("option");
  //     var tokenId = await this.kocoInstance.methods.tokenOfOwnerByIndex(this.accounts[0], i).call();
  //     opt.text = "Token ID: " + tokenId
  //     opt.value = tokenId
  //     yourCardsListBox.options.add(opt);
  // }
};

getCardInfo = async (tokenId, kind) => {
  // var nid = await this.web3.eth.net.getId();
  // if ( nid !== rootChainID ) {
  //     alert("Wrong network. Please change the network into Ethereum")
  //     return
  // }

  // var yourCardsListBox = document.getElementById("yourCards");
  // var selectedTokenId = yourCardsListBox.options[yourCardsListBox.selectedIndex].value;
  switch (kind) {
    case "staked":
      var tokenInfoBase64 = await leedovaultContract.methods
        .tokenURI(tokenId)
        .call();
      break;
    case "unstaked":
      var tokenInfoBase64 = await nftContract.methods.tokenURI(tokenId).call();
      break;
    case "metaverse":
      var tokenInfoBase64 = await leedorianContract.methods
        .tokenURI(tokenId)
        .call();
      break;
  }
  var jsonInfo = JSON.parse(atob(tokenInfoBase64.substring(29)));
  console.log("getCardInfo => ", jsonInfo);
  //   var jsonInfo = {
  //     image:
  //       "https://card-image-collection.s3.ap-northeast-2.amazonaws.com/cloudfront/" +
  //       tokenId +
  //       ".svg",
  //   };
  return jsonInfo;
  // var htmlStr = '<table class="center" border="1"><tr>'
  // htmlStr += '<td>Name</td><td>' + jsonInfo.name + '</td>'
  // htmlStr += '</tr><tr>'
  // htmlStr += '<td>Description</td><td>' + jsonInfo.description + '</td>'
  // htmlStr += '</tr><tr>'
  // htmlStr += '<td>Image</td><td><img src="' + jsonInfo.image + '" height="200" /></td>'
  // htmlStr += '</tr></table>'
  // getElem("tokenInfo").innerHTML = "Selected Token ID: " + tokenId + "<p>" + htmlStr;
  // this.setState({
  //     selectedTokenId: selectedTokenId,
  // });
};

async function fetchRoundInfo() {
  // current round, minting  count
  const totalSupply = await fetchTotalSupply();
  const roundNumber = parseInt(totalSupply / 456) + 1;
  const roundCurrent = totalSupply % 456;

  const roundinfo =
    '<p class="round-content">Round ' +
    roundNumber +
    " in progress" +
    " , " +
    roundCurrent +
    " minted of 456 cards (Total minted : " +
    totalSupply +
    ")</p>" +
    '<progress class="round-progress" value="' +
    roundCurrent +
    '" max="456"></progress>';

  $(".roundinfo").html(roundinfo);
  return;
}

async function fetchClaimTimeLock() {
  // Next minting available time
  // const claimTimeLockDate = new Date(claimTimeLock * 1000)
  return nftContract.methods.claimTimeLock().call();
}

async function fetchIsMintable() {
  // Check whether minting is currently possible or not true / false
  return nftContract.methods.isMintable().call();
}

async function fetchTotalSupply() {
  return nftContract.methods.totalSupply().call();
}

async function initializeClock(id, endtime) {
  // console.log('initializeClock')
  // const isMintable = await fetchIsMintable();
  // const totalSupply = await fetchTotalSupply();
  // const claimTimeLock = await fetchClaimTimeLock();

  const [isMintable, totalSupply, claimTimeLock] = await Promise.all([
    fetchIsMintable(),
    fetchTotalSupply(),
    fetchClaimTimeLock(),
  ]);
  // console.log(`isMintable: ${isMintable}`)
  // console.log(`totalSupply: ${totalSupply}`)
  const claimTimeLockDate = new Date(claimTimeLock * 1000);

  /** for testing **/
  // const isMintable = true;
  // const totalSupply = 456*20;
  // const totalSupply = 1000;
  // const claimTimeLockDate = new Date();
  // claimTimeLockDate.setHours( claimTimeLockDate.getHours() + 2);
  // claimTimeLockDate.setMinutes( claimTimeLockDate.getMinutes() + 2);
  // claimTimeLockDate.setSeconds( claimTimeLockDate.getSeconds() + 10);
  if (isMintable) {
    const clockDiv = document.getElementById("clockdiv");
    clockDiv.innerHTML = "Free minting is available. Go minting now!";
    return;
  } else if (!isMintable && totalSupply < 456 * 20) {
    // countdown
    const clock = document.getElementById(id);

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);

    const confetti = document.getElementsByClassName("confetti")[0];

    function updateClock() {
      const t = getTimeRemaining(claimTimeLockDate);

      // daysSpan.innerHTML = t.days;
      const hoursSpan = ("0" + t.hours).slice(-2);
      const minutesSpan = ("0" + t.minutes).slice(-2);
      const secondsSpan = ("0" + t.seconds).slice(-2);

      const clockDiv = document.getElementById("clockdiv");
      clockDiv.innerHTML = `Free mining starts in ${hoursSpan} Hours ${minutesSpan} Minutes ${secondsSpan} Seconds`;

      if (t.total <= 0) {
        clearInterval(timeinterval);
        clockDiv.style.display = "none";
        confetti.style.display = "flex";
        setTimeout(() => {
          confetti.style.display = "none";
        }, 2000);
      }
    }
  } else {
    const clockDiv = document.getElementById("clockdiv");
    clockDiv.innerHTML = "Free minting is over";
    clockDiv.style.display = "block";
    return;
  }
}

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function routeToFreeMinting() {
  $("#tabs").tabs({ active: 4 });
  window.scrollTo(0, 0);
}

function routeToOverview() {
  $("#tabs").tabs({ active: 2 });
  window.scrollTo(0, 0);
}

function routeToLeedo() {
  $("#tabs").tabs({ active: 5 });
  window.scrollTo(0, 0);
}

/* helper function */
function getElem(elemId) {
  return document.getElementById(elemId);
}

function getLink(addr) {
  var explorer;
  if (chainId == 1) {
    explorer = "https://etherscan.io";
  } else if (chainId == 3) {
    explorer = "https://ropsten.etherscan.io";
  } else if (chainId == 4) {
    explorer = "https://rinkeby.etherscan.io";
  } else if (chainId == 5) {
    explorer = "https://goerli.etherscan.io";
  } else if (chainId == 137) {
    explorer = "https://polygonscan.com";
  } else if (chainId == 80001) {
    explorer = "https://mumbai.polygonscan.com";
  } else {
    explorer = "";
    console.log("unsupported chainid " + chainId);
  }
  var shortAddr =
    addr.substring(0, 6) + "...." + addr.substring(addr.length - 4);

  if (addr.length == 42) {
    return (
      '<a target="_blank" style="font-size: 14px; text-decoration: underline;color:#818181;" href="' +
      explorer +
      "/address/" +
      addr +
      '">' +
      shortAddr +
      "</a>"
    );
  } else {
    return (
      '<a target="_blank" style="font-size: 14px; text-decoration: underline;color:#818181;" href="' +
      explorer +
      "/tx/" +
      addr +
      '">' +
      shortAddr +
      "</a>"
    );
  }
}

jQuery.fn.valAnimate = function () {
  this.fadeOut().fadeIn("slow");
};

$("#accordion").accordion();

// var img = document.getElementsByTagName("img");
// for (var x = 0; x < img.length; x++) {
// img.item(x).onclick=function() {window.open(this.src)};
// }
// function fnImgPop(url){
// var img=new Image();
// img.src=url;
// var img_width=img.width;
// var win_width=img.width+50;
// var img_height=img.height;
// var win=img.height+50;
// var OpenWindow=window.open('','_blank', 'width='+img_width+', height='+win+', menubars=no, scrollbars=auto');
// OpenWindow.document.write("<style>body{margin:0px;}</style><img src='"+url+"' >");
// }

function showBanner() {
  let loop_cnt = 0;
  setInterval(function () {
    document.getElementById("banner-img").src = space_shuttle_img[loop_cnt];
    loop_cnt = loop_cnt + 1;
    loop_cnt == 4 ? (loop_cnt = 0) : loop_cnt;
  }, 4000);
}

function bgColorChange(bgtype, isnetworkchange) {
  console.log("bgColorChange => ", bgtype);

  const home_body = document.getElementById("body-style");
  const tabs = document.getElementById("tabs");
  const tabs_bg = document.getElementById("tabs-bg");
  const metaverse_bg = document.getElementById("metaverse-bg");

  switch (bgtype) {
    case "white":
      if (isnetworkchange && chainId != 1) {
        switchNetwork(1); // ethereum mainnet
      }
      setTheme("red");
      home_body.style.backgroundColor = "#FFFFFF";
      home_body.style.backgroundImage = "none";
      tabs_bg.style.backgroundColor = "#3e6e6830";
      tabs_bg.style.border = "1px solid #dddddd";
      tabs.style.backgroundColor = "#FFFFFF";
      metaverse_bg.style.display = "none";

      break;
    case "pupple":
      if (isnetworkchange && chainId != 80001) {
        //   switchNetwork(137); // matic
        switchNetwork(80001); // matic
        setTheme("pupple");
      }
      home_body.style.backgroundColor = "#947CFF";
      tabs_bg.style.backgroundColor = "transparent";
      tabs_bg.style.border = "0px";
      tabs.style.backgroundColor = "transparent";
      metaverse_bg.style.display = "block";
      showMetaverseCardList("metaverse");
      break;
  }
}

/* Switch Network */
async function switchNetwork(targetNetwork) {
  console.log("switchNetwork =>", targetNetwork);
  let network_rpt = "https://eth-mainnet.alchemyapi.io/v2";
  switch (targetNetwork) {
    case 1:
      network_rpt = "https://eth-mainnet.alchemyapi.io/v2";
      break;
    case 137:
      network_rpt = "https://polygon-mainnet.g.alchemy.com/v2";
      break;
    case 80001:
      network_rpt = "https://matic-mumbai.chainstacklabs.com/";
      // network_rpt = "https://polygon-mumbai.g.alchemy.com/v2";
      break;
  }
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x" + targetNetwork.toString(16) }],
    });
  } catch (switchError) {
    // console.log("switchError =>", switchError);
    // console.log("network_rpt => ", network_rpt);
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x" + targetNetwork.toString(16),
              rpcUrl: network_rpt,
            },
          ],
        });
      } catch (addError) {
        console.log(addError);
        // Netword add failed...
        $("#metaverse-loading").hide();
      }
    }
  }
}

/* Metaverse Card List */
showMetaverseCardList = async (kind) => {
  $("#metaverse-loading").show();

  let tokenId = [];
  let myAddrBalanceOf = 0;
  checkInTokenIdList = [];
  console.log("myAddr => ", myAddr);

  switch (kind) {
    case "metaverse":
      //   console.log("metaverse");
      //   console.log("staked_cards => ", staked_cards);
      //   console.log("stakedIds => ", stakedIds);
      //   console.log("leedorianContract => ", leedorianContract);
      myAddrBalanceOf = staked_cards;
      if (stakedIds.length == 0) {
        stakedIds = await leedorianContract.methods.tokensOf(myAddr).call();
        tokenId = stakedIds;
        // console.log('stakedIds =>',stakedIds);
      } else {
        tokenId = stakedIds;
      }

      break;
  }

  let arr = [];
  const cardInfoList = await Promise.all(
    tokenId.map((id) => {
      // console.log('aaaaa => ',getCardInfo(id))
      return getCardInfo(id, "metaverse");
    })
  );
  cardInfoList.forEach((info, i) => {
    arr.push({ tokenId: tokenId[i], image: info.image });
  });

  arr.sort(function (a, b) {
    return parseFloat(a.tokenId) - parseFloat(b.tokenId);
  });

  function metaverseDeck(arr) {
    document.getElementById("deck-metaverse").innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      let card = document.createElement("div");
      let imgBox = document.createElement("div");
      let descriptionBox = document.createElement("div");
      let tokenId = document.createElement("div");
      //   let checkBox = document.createElement("div");
      card.className = "card";
      imgBox.className = "imgbox";
      descriptionBox.className = "descriptionBox-center";
      tokenId.className = "tokenID";
      //   checkBox.className = "checkBox";

      imgBox.innerHTML =
        '<img style="width: auto; height: auto; max-width: 200px; "  src="' +
        arr[i].image +
        '"/>';
      tokenId.innerHTML = "#" + arr[i].tokenId;
      //   checkBox.innerHTML = `<input style="width:20px;height:20px; " type="checkbox"  value="${arr[i].tokenId}" onclick ="checkBoxClick(this)"/>`;
      card.appendChild(imgBox);
      card.appendChild(descriptionBox);
      descriptionBox.appendChild(tokenId);
      //   descriptionBox.appendChild(checkBox);

      document.getElementById("deck-metaverse").appendChild(card);
    }
  }

  metaverseDeck(arr);

  $("#metaverse-loading").hide();
  // $("#staking-body").show();

  checkInBody(kind);
};
