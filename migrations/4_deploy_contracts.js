var funding = artifacts.require("./funding.sol");


module.exports = function(deployer) {
  deployer.deploy(funding, "0x36cFDAb85AF5e763058AAE2Dd895029Ea0FcBE03", "0x563C1d1743De1ad18Bf839f5c2fd80eb9ff53103");

};

// module.exports = function(deployer) {
  
// };
