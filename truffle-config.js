module.exports = {

  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    
    // An additional network, but with some advanced options…
    advanced: {
      // port: 8777,             // Custom port
      network_id: "*",       // Custom network
      gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
      gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
      // from: <address>,        // Account to send transactions from (default: accounts[0])
      websocket: true         // Enable EventEmitter interface for web3 (default: false)
    },
    
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19",      // Fetch exact version from solc-bin (default: truffle's version)
       optimizer: {
         enabled: false,
         runs: 200
       },
    }
  },
};
