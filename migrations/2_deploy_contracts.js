var HelloWorld = artifacts.require("./HelloWorld.sol");
var Counter = artifacts.require("./Counter.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(Counter);
};
