require('dotenv').config();
const Web3 = require('web3');
const abi = require('./YourContractABI.json'); // Save ABI as JSON file

const CONTRACT_ADDRESS = "0xYourContractAddress";
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL));

const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

const main = async () => {
  try {
    const result = await contract.methods.yourMethodName().call();
    console.log("📦 Result:", result);
  } catch (err) {
    console.error("❌ Error:", err);
  }
};

main();
