const EthereumTx = require('ethereumjs-tx').Transaction

var Web3 = require('web3')

var web3 = new Web3('http://127.0.0.1:7545')

//Setting Receiving and Sending Address

var sendingAddress = ''

var receivingAddress = ''

//Checking the balance of each account in ether

web3.eth.getBalance(sendingAddress).then(console.log(web3.utils.fromWei('1', 'ether')))

web3.eth.getBalance(receivingAddress).then(console.log(web3.utils.fromWei('1', 'ether')))

//Creating a transaction

var rawTransaction ={
    nonce: 1,
    to: receivingAddress,
    gasPrice: web3.utils.toHex(20000000),
    gasLimit: web3.utils.toHex(30000),
    value: web3.utils.toHex(100),
    data: web3.utils.toHex("")
}

//Sign the Transaction

var privateKey = ''

var senderPrivateKeyHex = new Buffer.from(privateKey,'hex')

var transaction = new EthereumTx(rawTransaction)

transaction.sign(senderPrivateKeyHex)

//Send transaction to the network

var serializedTransaction = transaction.serialize()

web3.eth.sendSignedTransaction(serializedTransaction)