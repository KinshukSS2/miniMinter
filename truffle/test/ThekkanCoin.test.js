const ThekkanCoin = artifacts.require("ThekkanCoin");

contract("ThekkanCoin", (accounts) => {
  it("should mint token 0 correctly", async () => {
    const instance = await ThekkanCoin.deployed();
    await instance.buyToken({ from: accounts[0], value: web3.utils.toWei("0", "gwei") });
    const owner = await instance.ownerOf(0);
    assert.equal(owner, accounts[0], "Owner of token 0 should be accounts[0]");
  });

  it("should mint token 1 correctly with correct price", async () => {
    const instance = await ThekkanCoin.deployed();
    await instance.buyToken({ from: accounts[1], value: web3.utils.toWei("0.1", "gwei") });
    const owner = await instance.ownerOf(1);
    assert.equal(owner, accounts[1], "Owner of token 1 should be accounts[1]");
  });
});
  