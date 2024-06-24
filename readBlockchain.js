const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(
	"https://mainnet.infura.io/v3/04b8d04947db46fdabbe9a7571f3b44f"
); //PROVIDER IS USED BY BLOCKCHAIN TO ONLY READ CONTENTS OR PERFORM READ OPERATIONS ON THE SMART CONTRACT
//infura is used for link //Infura is used to turn our computer to a node which can interact with blockchain

const queryBlockchain = async() => {
	const block = await provider.getBlockNumber(); //get number of current iterated block
	console.log('Current block number: ', block);

	const balance = await provider.getBalance('0x06012c8cf97bead5deae237070f9587f8e7a266d');
	console.log('Account balance in big number: ', balance);

	const balanceEther = ethers.utils.formatEther(balance); //convert big number object to ethers
	console.log('Account balance in ethers: ', balanceEther);

	const balanceWei = ethers.utils.parseEther(balanceEther); //convert ethers to wei(which is represented in big number object)
	console.log('Account balance in wei: ', balanceWei);
}
queryBlockchain();