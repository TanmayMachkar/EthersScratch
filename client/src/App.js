import './App.css';
import { useEffect } from 'react';
const { ethers } = require('ethers');

function App() {
  const walletAddress = '0x5d2b378ab8fc721968ec8c32dee579cb1fa6509f';

  useEffect(() => {
    const walletAbi = [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "accountBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "contractBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getValue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "sendEthContract",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "sendEthUser",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_num",
            "type": "uint256"
          }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]
    //write(make changes) operations
    const writeContract = async() => {
      const provider = new ethers.providers.Web3Provider(window.ethereum); //provider for metamask
      await provider.send('eth_requestAccounts', []); //metamask will open as soon as app starts running
      const signer = provider.getSigner();
      const contract = new ethers.Contract(walletAddress, walletAbi, signer);
      
      await contract.setValue(2); //call function setValue to set value of num in smart contract to 2
      
      //{value: ethers.utils.parseEther('0.001')} = msg.value (check sendEthContract function of smart contract)
      await contract.sendEthContract({value: ethers.utils.parseEther('0.001')}) //send 0.001 ether from your metamask acc to contract balance
    
      await contract.sendEthUser("0xDA27Fa4f15212A944cEE47C33a696c94099265Dd", {value: ethers.utils.parseEther('0.001')}) //send 0.01 eth from contract balance to user defined by given address
      //basically ethers will go from macho->contract first since macho wallet is connected to site and since we're performing write operation it will take ether from macho
      //after this 0.001 ether will go from contract balance to user address
    }
    writeContract();
  }, [])

  return (
    <div>
    </div>
  );
}

export default App;
