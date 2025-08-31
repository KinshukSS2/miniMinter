const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const hre = require("hardhat");

describe("ThekkanCoin", function () {

  // Fixture to deploy and mint once
  async function deployThekkanCoinAndMintTokenFixture() {
    const ThekkanCoin = await hre.ethers.getContractFactory("ThekkanCoin");
    const thekkanCoinInstance = await ThekkanCoin.deploy();
    const [owner, otherAccount] = await hre.ethers.getSigners();

    await thekkanCoinInstance.safeMint(otherAccount.address);

    return { thekkanCoinInstance, owner, otherAccount };
  }

  it("is possible to mint a token", async () => {
    const { thekkanCoinInstance, otherAccount } = await loadFixture(deployThekkanCoinAndMintTokenFixture);

    expect(await thekkanCoinInstance.ownerOf(0)).to.equal(otherAccount.address);
  });

  it("fails to transfer tokens from the wrong address", async () => {
    const { thekkanCoinInstance, owner, otherAccount } = await loadFixture(deployThekkanCoinAndMintTokenFixture);
    const [, , notTheNFTOwner] = await hre.ethers.getSigners();

    expect(await thekkanCoinInstance.ownerOf(0)).to.equal(otherAccount.address);

    await expect(
      thekkanCoinInstance.connect(notTheNFTOwner).transferFrom(
        otherAccount.address,
        notTheNFTOwner.address,
        0
      )
    ).to.be.reverted; // ✅ Generic revert check
  });

});
