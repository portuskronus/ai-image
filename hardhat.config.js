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
