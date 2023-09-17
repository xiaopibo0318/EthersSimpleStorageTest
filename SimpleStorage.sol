// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

// pragma solidity ^0.8.0;
// pragma solidity >=0.8.0 <0.9.0;

contract SimpleStorage {
    uint256 favoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }
    // uint256[] public anArray;
    People[] public people;

    mapping(string => uint256) public nameToFavoriteNumber;

    function Store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function Retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function AddPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
