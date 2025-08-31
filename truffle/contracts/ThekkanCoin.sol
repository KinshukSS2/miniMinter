// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@ganache/console.log/console.sol"; 

contract ThekkanCoin is ERC721, Ownable {
    uint256 private _tokenId;
    constructor() ERC721("ThekkanCoin", "TKC") Ownable(msg.sender) {}
    
    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/QmU1CNuwJZTxc6FZqKLsUPVjPrR1Fg2U79sNDYQozpBj7w/genesis/";
    }

    function buyToken()public payable{
        uint256 price=_tokenId*0.1 gwei;
        require(msg.value ==price,"wrong amount of funds sent");
        _safeMint(msg.sender,_tokenId);
        console.log("got here",_tokenId,msg.value);
        _tokenId++;
    }

    function currentTokenId() public view returns (uint256) {
    return _tokenId;
}


    function safeMint(address to) public onlyOwner {
        _safeMint(to, _tokenId);
        _tokenId++;
    }

    function tokenURI(uint256 tokenId) public pure override returns (string memory) {
        return string(abi.encodePacked(_baseURI(), Strings.toString(tokenId + 1), ".json"));
    }

}
