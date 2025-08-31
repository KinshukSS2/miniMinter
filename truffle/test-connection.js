// require('dotenv').config(); // load .env
// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const Web3 = require('web3');

// (async () => {
//   try {
//     const { PRIVATE_KEY, INFURA_URL } = process.env;

//     if (!PRIVATE_KEY || !INFURA_URL) {
//       throw new Error("Missing PRIVATE_KEY or INFURA_URL in .env");
//     }

//     const provider = new HDWalletProvider({
//       privateKeys: [PRIVATE_KEY],
//       providerOrUrl: INFURA_URL,
//     });

//     const web3 = new Web3(provider);
//     const accounts = await web3.eth.getAccounts();

//     console.log("✅ Connected to Infura. Wallet address:", accounts[0]);

//     provider.engine.stop();
//   } catch (err) {
//     console.error("❌ Connection failed:", err.message || err);
//     process.exit(1);
//   }
// })();







require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

process.on('unhandledRejection', (reason, promise) => {
  console.log('UNHANDLED REJECTION!');
  console.dir(reason, { depth: null });
  process.exit(1);
});

(async () => {
  try {
    const { PRIVATE_KEY, INFURA_URL } = process.env;

    if (!PRIVATE_KEY || !INFURA_URL) {
      throw new Error("Missing PRIVATE_KEY or INFURA_URL in .env");
    }

    const provider = new HDWalletProvider({
      privateKeys: [PRIVATE_KEY],
      providerOrUrl: INFURA_URL,
    });

    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();

    console.log("✅ Connected to Infura. Wallet address:", accounts[0]);

    provider.engine.stop();
  } catch (err) {
    console.error("❌ Connection failed:");
    console.dir(err, { depth: null });
    process.exit(1);
  }
})();
