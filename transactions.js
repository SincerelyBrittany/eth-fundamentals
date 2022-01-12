/*##########################

CONFIGURATION
##########################*/

// -- Step 1: Set up the appropriate configuration 
var Web3 = require("web3") 
//var EthereumTransaction = require("ethereumjs-tx") 
const EthereumTx = require('ethereumjs-tx').Transaction
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving addresses for the transaction. 
var sendingAddress = '0x20C0b92D70831978539f26384bA6A0162fD91680' 
var receivingAddress = '0xD8655e7C2bF3D31760C4751d1Dbdb607ffB1eD4F'

// -- Step 3: Check the balances of each address 
web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)


//web3.eth.getUncle(500, 0).then(console.log);
web3.eth.getBlockTransactionCount('0x0b3ced25a1105f71b835155d5adee82f71e63f48ee0f9e20187d80929c97c14b').then(console.log);
web3.eth.getGasPrice().then(console.log)


/*##########################

CREATE A TRANSACTION
##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown 
// var rawTransaction = { 
//     nonce: web3.utils.toHex(0),
//     to: receivingAddress,
//     gasPrice: web3.utils.toHex(20000000),
//     gasLimit: web3.utils.toHex(30000),
//     value: web3.utils.toHex(100),
//     data: web3.utils.toHex("")
// }

// // -- Step 5: View the raw transaction 
// console.log(rawTransaction)

// // -- Step 6: Check the new account balances (they should be the same) 
// web3.eth.getBalance(sendingAddress).then(console.log) 
// web3.eth.getBalance(receivingAddress).then(console.log)

// // Note: They haven't changed because they need to be signed...

// /*##########################

// Sign the Transaction
// ##########################*/

// // -- Step 7: Sign the transaction with the Hex value of the private key of the sender 
// var privateKeySender = '' 

// //var privateKeySenderHex = Buffer.from(JSON.stringify(privateKeySender)).toString('hex');
// var privateKeySenderHex = new Buffer.from(privateKeySender,'hex')

// // var privateKeySenderHex = new Buffer.alloc(privateKeySender, 'hex') 
// var transaction = new EthereumTx(rawTransaction) 
// transaction.sign(privateKeySenderHex)

// // /*#########################################

// // Send the transaction to the network
// // #########################################*/

// // // -- Step 8: Send the serialized signed transaction to the Ethereum network. 
// var serializedTransaction = transaction.serialize(); 
// web3.eth.sendSignedTransaction(serializedTransaction);