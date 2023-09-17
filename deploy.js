// async -> await Promiss
// Pending
// Fulfilled
// Rejected

// http://127.0.0.1:8545

const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  // connect to RPC server (using Ganache, storing in env)
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

  const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf8");
  let wallet = new ethers.Wallet.fromEncryptedJsonSync(
    encryptedJson,
    process.env.KEYPW,
  );
  wallet = await wallet.connect(provider);

  // connect to the target (using private key)
  //const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  // the document I did in solidity.
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const bina = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf-8",
  );

  const contractFactory = new ethers.ContractFactory(abi, bina, wallet);
  console.log("Deploying, please wait...");
  //Waiting for contract to deploy
  const contract = await contractFactory.deploy();
  //console.log(contract);
  // const deploymentResult = await contract.deployTransaction.wait(1);
  // console.log(deploymentResult);

  let nowNumber = await contract.Retrieve();
  console.log(`Current Number is: ${nowNumber}`);
  await contract.Store("77");
  nowNumber = await contract.Retrieve();
  console.log(`Current Number is: ${nowNumber}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
