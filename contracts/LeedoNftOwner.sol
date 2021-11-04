// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @dev LEEDO NFT Ownership Proxy
 *
 *  _              ______      
 * | |             |  _  \     
 * | |     ___  ___| | | |___  
 * | |    / _ \/ _ \ | | / _ \ 
 * | |___|  __/  __/ |/ / (_) |
 * \_____/\___|\___|___/ \___/ 
 * LEEDO Project
 */

interface INft {

    function ownerOf(uint256 tokenId) external view returns (address owner);
}

contract NftOwner {
    
    address nftAddr;
    address nftVaultAddr;

    constructor(address _nftAddr, address _nftVaultAddr) {
        nftAddr = _nftAddr;
        nftVaultAddr = _nftVaultAddr;
    }
    
    function ownerOf(uint256 tokenId) external view returns (address) {
        INft NFT = INft(nftAddr);
        if (NFT.ownerOf(tokenId) == nftVaultAddr) {
            INft Vault = INft(nftVaultAddr);
            return Vault.ownerOf(tokenId);
        } else {
            return NFT.ownerOf(tokenId);
        }
    }
}

