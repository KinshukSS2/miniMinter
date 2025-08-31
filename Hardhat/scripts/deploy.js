// scripts/deploy.js

const hre = require("hardhat");

(async () => {
  try {
    console.log("🚀 Starting deployment...");

    const ThekkanCoin = await hre.ethers.getContractFactory("ThekkanCoin");
    const thekkanInstance = await ThekkanCoin.deploy();

    await thekkanInstance.waitForDeployment(); // replaces deprecated .deployed()

    console.log(`✅ Contract deployed at: ${thekkanInstance.target}`);
  } catch (e) {
    console.error("❌ Deployment failed:");
    console.error(e);
    process.exitCode = 1;
  }
})();
