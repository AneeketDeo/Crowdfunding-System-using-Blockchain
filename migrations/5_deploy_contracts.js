var backerRewards = artifacts.require("./BackerRewards.sol");


module.exports = function(deployer) {
  deployer.deploy(backerRewards, "0x9F45Eeb7c50082cb29376D8994f1C46360483E28");

};

// module.exports = function(deployer) {
  
// };
