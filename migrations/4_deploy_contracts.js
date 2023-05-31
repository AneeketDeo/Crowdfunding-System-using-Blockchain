var funding = artifacts.require("./funding.sol");


module.exports = function(deployer) {
  deployer.deploy(funding, "0x36cFDAb85AF5e763058AAE2Dd895029Ea0FcBE03", "0x9F45Eeb7c50082cb29376D8994f1C46360483E28");

};

// module.exports = function(deployer) {
  
// };
