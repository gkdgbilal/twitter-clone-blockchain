require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/KhBGhk-uWOuiNfsnNK5C_5bq486yfHNM',
      accounts: [
        'ff635a163762d9988445bc9bfa3664acfcf2809d9faaf7d0684007009a3f26a9'
      ]
    }
  }
};
