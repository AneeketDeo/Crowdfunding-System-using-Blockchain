var backerRewards = artifacts.require("./BackerRewards.sol");


module.exports = function(deployer) {
  deployer.deploy(backerRewards, "0x73e55eE03C09905D5C4B5285783Db517B9E38155");

};

// module.exports = function(deployer) {
  
// };
