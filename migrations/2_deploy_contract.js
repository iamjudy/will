var MainContract = artifacts.require("MainContract");
var Backup = artifacts.require("Backup");
var ActivateBackup = artifacts.require("ActivateBackup");
var setpassword=artifacts.require("setpassword");
module.exports = function(deployer) {
  //deployer.deploy(MainContract);
  //deployer.deploy(Backup);
  deployer.deploy(MainContract)
  .then(function() {
    return deployer.deploy(Backup, MainContract.address);
  })
  .then(function() {
    return deployer.deploy(ActivateBackup, Backup.address)
  })
  .then(function(){
    return deployer.deploy(setpassword,MainContract.address)
  });
  //https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations
};