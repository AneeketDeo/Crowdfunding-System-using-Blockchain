var backerRewards = artifacts.require("./BackerRewards.sol");


module.exports = function(deployer) {
  deployer.deploy(backerRewards, "0x563C1d1743De1ad18Bf839f5c2fd80eb9ff53103");

};

// module.exports = function(deployer) {
  
// };
