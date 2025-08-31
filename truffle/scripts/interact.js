require('dotenv').config();
const Web3 = require('web3');
const contractJson = require('../build/contracts/ThekkanCoin.json');

const INFURA_URL = process.env.INFURA_URL;
const CONTRACT_ADDRESS = "0x844e3B51a5dB0b47A672891345A9e5211018Aac6"; // Replace with your actual contract address
const ABI = contractJson.abi;

const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_URL));
const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

async function main() {
  try {
    // Example: call a view/pure method from the contract
    const result = await contract.methods.name().call(); // Replace with real method
    console.log("✅ Method result:", result);
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

main();
