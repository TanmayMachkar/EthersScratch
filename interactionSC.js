//0x5d2b378ab8fc721968ec8c32dee579cb1fa6509f
const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(
	"https://sepolia.infura.io/v3/04b8d04947db46fdabbe9a7571f3b44f"
);

const walletAddress = '0x5d2b378ab8fc721968ec8c32dee579cb1fa6509f';
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

//performing read operations
const contractInteraction = async() => {
	const walletContract = new ethers.Contract(walletAddress, walletAbi, provider); //for interacting with contract we need the Contract(address, abi, provider) function

	const contractName = await walletContract.name(); //access name variable of contract
	console.log('Contract name: ',contractName);

	const contractNum = await walletContract.getValue();
	console.log('Contract num: ', contractNum.toNumber());

	const contractBalance = await walletContract.contractBalance();
	console.log('Contract balance: ', ethers.utils.formatEther(contractBalance));

	const userBalance = await walletContract.accountBalance("0x9B6b67389434c900E4139FEBda30402Ca1DEC166");
	console.log("Account(user) balance: ", ethers.utils.formatEther(userBalance));
}
contractInteraction();