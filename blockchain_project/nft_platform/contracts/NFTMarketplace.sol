// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NFTMarketplace {
    struct Item {
        uint256 id;
        address creator;
        string uri;
        uint256 price;
        address owner;
        bool forSale;
    }

    uint256 public nextItemId = 1;
    mapping(uint256 => Item) public items;

    function createItem(string memory uri, uint256 price) public {
        items[nextItemId] = Item({
            id: nextItemId,
            creator: msg.sender,
            uri: uri,
            price: price,
            owner: msg.sender,
            forSale: true
        });
        nextItemId++;
    }

    function buyItem(uint256 itemId) public payable {
        Item storage item = items[itemId];
        require(item.forSale, "Item not for sale");
        require(msg.value >= item.price, "Insufficient payment");
        address previousOwner = item.owner;
        item.owner = msg.sender;
        item.forSale = false;
        payable(previousOwner).transfer(msg.value);
    }
}