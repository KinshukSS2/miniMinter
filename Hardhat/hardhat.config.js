require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
const fs = require("fs");

// Load secrets
let mnemonic = fs.readFileSync(".secret").toString().trim();
let alchemyProjectID = fs.readFileSync(".alchemy").toString().trim();

module.exports = {
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyProjectID}`,
      accounts: {
        mnemonic: mnemonic,
        path: "m/44'/60'/0'/0", // standard HD path
        initialIndex: 1,
        count: 10,
      },
    },
  },
  solidity: "0.8.28",

  sourcify: {
    enabled: true
  },
  
};




// 0x44b79044F86032e7a668E1e7F66df10F699D9Fd7 contract address currently



// 0x72ed1132E0695370341BC368951f2857D5Bdf719 for react



// 0x5FbDB2315678afecb367f032d93F642f64180aa3  