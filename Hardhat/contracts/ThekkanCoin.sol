// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";



// import "hardhat/console.sol";

contract ThekkanCoin is ERC721, ERC721Burnable, Ownable {

    uint256 private _tokenId;
    constructor() ERC721("ThekkanCoin", "TKC") Ownable(msg.sender) {}
    
    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/QmU1CNuwJZTxc6FZqKLsUPVjPrR1Fg2U79sNDYQozpBj7w/genesis/";
    }

    // function buyToken()public payable{
      
    //     require(_tokenId < 5, "All NFTs minted");
      
    //     _safeMint(msg.sender,_tokenId);
    //     _tokenId++;
    // }

    function currentTokenId() public view returns (uint256) {
    return _tokenId;
}





    function safeMint(address to) public onlyOwner {
        _safeMint(to, _tokenId);
        _tokenId++;
    }

    function mintTo(address recipient) public payable {
    require(_tokenId < 5, "All NFTs minted");
    require(msg.value >= 0.0000001 ether, "Insufficient payment");

    _safeMint(recipient, _tokenId);
    _tokenId++;
    }


    function tokenURI(uint256 tokenId) public pure override returns (string memory) {
        return string(abi.encodePacked(_baseURI(), Strings.toString(tokenId + 1), ".json"));
    }

}








