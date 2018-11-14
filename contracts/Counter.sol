pragma solidity ^0.4.23;

contract Counter {

    int public count = 0;

    function getCount() public view returns(int) {

        return count;

    }

    function incrementCount() public {

        count++;

    }

    function decrementCount() public {

        count--;
        
    }

}