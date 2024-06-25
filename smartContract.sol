// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

//NOTE: this contract wasn't used by interactionSC.js file for interaction //it used the smart contract present on remix which was deployed
//read: reading from blockchain
//write: writing(making changes) to blockchain

contract wallet{
    string public name = "wallet";
    uint num;

    //write
    function setValue(uint _num) public{
        num = _num;
    }
    //read
    function getValue() public view returns(uint) {
        return num;
    }
    //write
    function sendEthContract() public payable {

    }
    //read
    function contractBalance() public view returns(uint) {
        return address(this).balance;
    }
    //write
    function sendEthUser(address _user) public payable{
        payable(_user).transfer(msg.value); //send value from contract balance to given user address
    }
    //read
    function accountBalance(address _address) public view returns(uint) {
        return (_address).balance;
    }
}

//0x5d2b378ab8fc721968ec8c32dee579cb1fa6509f