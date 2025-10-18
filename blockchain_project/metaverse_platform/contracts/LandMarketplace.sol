// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandMarketplace {
    struct Land {
        uint256 id;
        address owner;
        uint256 price;
        bool forSale;
    }

    uint256 public nextLandId = 1;
    mapping(uint256 => Land) public lands;

    function mintLand() public returns (uint256) {
        lands[nextLandId] = Land({
            id: nextLandId,
            owner: msg.sender,
            price: 0,
            forSale: false
        });
        nextLandId++;
        return nextLandId - 1;
    }

    function setPrice(uint256 landId, uint256 price) public {
        require(lands[landId].owner == msg.sender, "Only the owner can set the price");
        lands[landId].price = price;
        lands[landId].forSale = true;
    }

    function buyLand(uint256 landId) public payable {
        Land storage land = lands[landId];
        require(land.forSale, "Land is not for sale");
        require(msg.value >= land.price, "Insufficient payment");
        address previousOwner = land.owner;
        land.owner = msg.sender;
        land.forSale = false;
        payable(previousOwner).transfer(msg.value);
    }
}