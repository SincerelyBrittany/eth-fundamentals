# eth-fundamentals

## install web3 - using these docs: https://web3js.readthedocs.io/en/v1.2.1/getting-started.html

`npm: npm install web3`

## Step 1: Choose a network from the list of endpoints in the Infura dashboard.

## Step 2: Set a variable url to a string containing this endpoint url.

`var url = 'YOUR ENDPOINT URL HERE'`

## Step 3: Set a variable web3 = to a new instance of Web3 connected to the url.

`var web3 = new Web3(url)`

## Step 4: Call this new web3 variable

`web3`

You are now connected to the Ethereum network.

# Finding an address in terminal

## Step 1: Step 1: Navigate to etherscan.io

Choose a transaction. Next, choose the sender or receiver of that transaction. We can use this address as an example to search using web3.

`var address = "0x00000000219ab540356cBB839Cbe05303d7705Fa"`

` web3.eth.getBalance(address, (err,bal) => {balance = bal})`

```Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 415,
  [Symbol(trigger_async_id_symbol)]: 5,
  [Symbol(destroyed)]: { destroyed: false }
}
```

`balance`

> '9002834000069000000000069'

## Step 2: covnert to ether

`web3.utils.fromWei(balance, 'ether');`

> '9002834.000069000000000069'

## Step 4: Get Transaction Count

Another value held in an EOA as described in the video is the transaction count. Using web3, see if you can get the transaction count for this account for yourself.

Here is the example for web3.eth.getTransactionCount as shown in the documentation.

`web3.eth.getTransactionCount(address [, defaultBlock] [, callback])`

Example
`web3.eth.getTransactionCount("ACCOUNT NUMBER") .then(console.log);`

> 1

# Read-A-Countract-Account

## Step 1: Step 1: Navigate to etherscan.io, go to Top 20 Tokens, pick a token, navigate to the contract address, and navigate to the ABI (application binary interface)

## Step 2: Set a variable ABI to the value of the ABI in the contract code.

`var abi = PASTE ABI FROM CONTRACT`

> abi
> You can copy the ABI for the basic attention token from this link.

## Step 3: Set the address of the contract to a variable named contractAddress.

`var contractAddress = '0x0D8775F648430679A709E98d2b0Cb6250d2887EF'`

## Step 4: ABI and Contract Address

Pass the abi and contractAddress into the web3.eth.Contract function and assign it to a varialbe named contract.

`var contract = new web3.eth.Contract(abi, contractAddress)`

## Step 5: View the details of the contract.

`contract`

## Step 6: View the methods from the contract

`contract.methods`

## Step 7: Call methods for this contract from your terminal.

Here are a few examples. Try these in your terminal to see what response you get.

`contract.methods.name()`
`contract.methods.name().call((err, result) => { console.log(result )})`
`contract.methods.symbol().call((err, result) => { console.log(result )})`
`contract.methods.totalSupply().call((err, result) => { console.log(result )})`

# USING GANACHE AS YOUR LOCAL BLOCKCHAIN

## Step 1: Run Ganache

Before trying to connect to ganache, it's important to remember that you are even running it. Determine which you prefer, the ganache-cli, or ganche-gui, and run that before trying to connect to it.

## Step 2: Connect Web3 to Ganache

Connecting ganache to web3 is simple. All we need to do is set a different url variable as our endpoint.

For convenience, I've place all of the commands below to get started. Note that there is only 1 difference between this and what we have done already. Rather than setting the variable url to our infura endpoint, we change it to the url of our ganache network.

## Step 3: Create and change into a directory

`mkdir projectFolder -- <----don't name this folder web3`
`cd projectFolder`

# Step 4: Initialize an instance of npm

`npm init -y`
`npm install web3 --save`

# Step 5: Start node in terminal

`node`

# Step 6: Require web3 into node

`var Web3 = require('web3')`

# Step 7: Set the web3 variable to an instance of Web3 on your URL

`var web3 = new Web3('HTTP://127.0.0.1:7545')` // If you are using ganache-gui
`var web3 = new Web3('HTTP://127.0.0.1:8545')` // if you are using ganache-cli

# Step 8: Call this web3 variable to read information to your terminal

`web3`

# Step 9: Test the connection by reading the list of accounts

`web3.eth.getAccounts().then(accounts => console.log(accounts));`

If everything worked out, you now have a connection from your local ganache blockchain to web3. You can run all of the same commands you learned previously to inspect different accounts, balances, and more. Feel free to experiment, we'll be doing that shortly as well, but before wrapping up I'll show you how to bring this functionality into your development environment.

# Creating Transactions

Before making the transaction, ensure you have installed both dependencies to your npm initialization.

`npm install ethereumjs-tx --save`
`npm install web3 --save`

Next, paste this code into your .js file and use the video to follow along.

/\*##########################

CONFIGURATION
##########################\*/

// -- Step 1: Set up the appropriate configuration var Web3 = require("web3") var EthereumTransaction = require("ethereumjs-tx") var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving addresses for the transaction. var sendingAddress = 'ADDRESS FROM GANACHE GOES HERE' var receivingAddress = 'ANOTHER ADDRESS FROM GANACHE GOES HERE'

// -- Step 3: Check the balances of each address web3.eth.getBalance(sendingAddress).then(console.log) web3.eth.getBalance(receivingAddress).then(console.log)

/\*##########################

CREATE A TRANSACTION
##########################\*/

// -- Step 4: Set up the transaction using the transaction variables as shown var rawTransaction = { nonce: 0, to: receivingAddress, gasPrice: 20000000, gasLimit: 30000, value: 1, data: "" }

// -- Step 5: View the raw transaction rawTransaction

// -- Step 6: Check the new account balances (they should be the same) web3.eth.getBalance(sendingAddress).then(console.log) web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They haven't changed because they need to be signed...

/\*##########################

Sign the Transaction
##########################\*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender var privateKeySender = 'PRIVATE KEY OF SENDER GOES HERE' var privateKeySenderHex = new Buffer(privateKeySender, 'hex') var transaction = new EthereumTransaction(rawTransaction) transaction.sign(privateKeySenderHex)

/\*#########################################

Send the transaction to the network
#########################################\*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network. var serializedTransaction = transaction.serialize(); web3.eth.sendSignedTransaction(serializedTransaction);
