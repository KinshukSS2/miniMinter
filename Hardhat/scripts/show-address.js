// scripts/show-address.js

const hre = require("hardhat");

(async () => {
  const [deployer] = await hre.ethers.getSigners();
  console.log("📬 Deploying from address:", deployer.address);
})();
