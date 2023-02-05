require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
 require('dotenv').config()

 const { INFURA_API_KEY, PRIVATE_KEY } = require("./env.json");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks: {
    goerli: {
            chainId: 5,
            url: INFURA_API_KEY,
            accounts: [PRIVATE_KEY],
    },
},
};

// Deployed NFT Contract at: 0xBc3e3D00528091D3673e9c937c0a42A72A154943 - goerli

// Deployed NFT Contract at: 0x135A958A1777Fd1d870224d87E496e3542642B46 - goerli

// Deployed NFT Contract at: 0x5FbDB2315678afecb367f032d93F642f64180aa3 - local host

// Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
// Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80