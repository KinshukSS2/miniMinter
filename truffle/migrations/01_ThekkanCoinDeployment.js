const ThekkanCoin = artifacts.require("ThekkanCoin");

module.exports = async function (deployer) {
  await deployer.deploy(ThekkanCoin); 
};
