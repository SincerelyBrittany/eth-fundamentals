var Web3 = require('web3')

var web3 = new Web3('HTTP://127.0.0.1:7545') // If you are using ganache-gui
//var web3 = new Web3('HTTP://127.0.0.1:8545') // if you are using ganache-cli

//web3.eth.getAccounts().then(accounts => console.log(accounts));
web3.eth.getAccounts().then(accounts => console.log(accounts[1]));