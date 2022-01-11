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
