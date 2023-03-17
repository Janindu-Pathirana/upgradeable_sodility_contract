// const { deployProxy } = require("@openzeppelin/truffle-upgrades");

// const UpgradeablePetV1 = artifacts.require("UpgradeablePetV1");
// const UpgradeablePetV2 = artifacts.require("UpgradeablePetV2");

// module.exports = async function (deployer, network, accounts) {
//   const instance = await deployProxy(UpgradeablePetV1, [accounts[0]], {
//     deployer,
//   });
//   console.log("Deployed", instance.address);
// };

const { upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const UpgradeablePetV1 = artifacts.require("UpgradeablePetV1");
const UpgradeablePetV2 = artifacts.require("UpgradeablePetV2");

module.exports = async function (deployer) {
  const existing = await UpgradeablePetV1.deployed();
  const instance = await upgradeProxy(existing.address, UpgradeablePetV2, {
    deployer,
  });
  console.log("Upgraded", instance.address);
};
