// tx - Object: The transaction object as follows:
// nonce - String: (optional) The nonce to use when signing this transaction. Default will use web3.eth.getTransactionCount().
// chainId - String: (optional) The chain id to use when signing this transaction. Default will use web3.eth.net.getId().
// to - String: (optional) The recevier of the transaction, can be empty when deploying a contract.
// data - String: (optional) The call data of the transaction, can be empty for simple value transfers.
// value - String: (optional) The value of the transaction in wei.
// gas - String: The gas provided by the transaction.
// gasPrice - String: (optional) The gas price set by this transaction, if empty, it will use web3.eth.gasPrice()

export default class EthTransaction {
  from: string
  to: string
  value: number
  gasPrice: number
  gas: number

  constructor(from: string, to: string, value: number, gasPrice: number) {
    if (typeof from === 'string' && from.substr(0, 2) === '0x') {
      from = from.substr(2)
    }
    if (typeof to === 'string' && to.substr(0, 2) === '0x') {
      to = to.substr(2)
    }
    this.from = from
    this.to = to
    this.value = value
    this.gasPrice = gasPrice
    this.gas = 21000
  }
}
