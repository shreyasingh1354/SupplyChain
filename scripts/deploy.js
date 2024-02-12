
const hre = require("hardhat");

async function main() {
  const Tracking = await hre.ethers.getContractFactory("tracking");
  
  const tracking = await Tracking.deploy();
    

  await tracking.deployed();

  console.log(`tracking deployed to ${tracking.address}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
