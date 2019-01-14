import reduceReducers from 'reduce-reducers'
import PendingTransaction from 'lndr/pending-transaction'
import moment from 'moment'
import { UserData } from 'lndr/user'
import Friend from 'lndr/friend'
import { hasNoDecimals, TRANSFER_LIMIT_STANDARD, TRANSFER_LIMIT_KYC } from 'lndr/currencies'
import { WEI_PER_ETH } from 'lndr/erc-20'
import PayPalRequest from 'lndr/paypal-request'
import { settlementTerms } from 'language'

export const initialState = ({})

// TODO - Initial reducer function to transition from using custom engine module
// to using redux as a storage.  THIS NEEDS TO BE REFACTORED TO USE REDUX IN A
// EFFECTIVE STORAGE RATHER THAN A SINGLE SETTER
const reducer = (state = initialState, action) => {
  const nextState = { ...state }
  switch (action.type) {
    case 'SET_STATE':
      return { ...nextState, ...action.payload }
    default:
      return state
  }
}

export const getUser = state => () : UserData => state.store.user

export const submitterIsMe = state => (pendingTransaction: PendingTransaction) => {
  const { address } = getUser(state)()
  return pendingTransaction.submitter === address
}

export const settlerIsMe = state => (pendingSettlement: any) => {
  const { address } = getUser(state)()
  return pendingSettlement.submitter === address
}

// TODO - Remove this function.  It is not decriptive and only is here for temp
// purposes.  We will need to find all uses of this function and write proper
// selectors
export const getStore = state => () => (state.store)

// Place any addtional app reducers here
export default reduceReducers(
  reducer
)

export const getPendingTransactionsCount = state => state.store.pendingTransactions.length

export const getNeedsReviewCount = state => {
  const result = (
    state.store.pendingTransactions.filter( transaction => !submitterIsMe(state)(transaction) ).length +
    state.store.pendingSettlements.filter( settlement => !settlerIsMe(state)(settlement) ).length +
    state.store.payPalRequests.filter( request => !request.requestorIsMe ).length +
    state.store.pendingFriends.length
  )
  return result
}

export const getUcacAddr = state => (currency: string) => {
  const { ucacAddresses } = getStore(state)()
  return ucacAddresses[currency]
}

export const getUcacCurrency = state => (ucac: string) => {
  const { ucacAddresses } = getStore(state)()

  for(let currency in ucacAddresses) {
    if (ucacAddresses[currency].indexOf(ucac) !== -1) {
      return currency
    }
  }
  return 'USD'
}

export const getAllUcacCurrencies = state => Object.keys(state.store.ucacAddresses);

export const getWeeklyEthTotal = state => {
  let { ethTransactions, bilateralSettlements, user } = getStore(state)()
  if (!ethTransactions) {
    ethTransactions = []
  }
  const lastWeekWei = ethTransactions.reduce( (acc, cur) => moment(cur.time).add(7, 'day') > moment() ? acc + Number(cur.amount) : acc, 0)
  const bilateralWei = bilateralSettlements.reduce( (acc, cur) => cur.creditorAddress === user.address ? acc + Number(cur.settlementAmount) : acc, 0)

  return (lastWeekWei + bilateralWei) / WEI_PER_ETH
}

export const hasPendingTransaction = state => (friend: Friend) => {
  function friendMatch(list: any) {
    return list.some( ele => ele.creditorAddress === friend.address || ele.debtorAddress === friend.address )
  }
  const { pendingTransactions, pendingSettlements, bilateralSettlements } = state.store
  return friendMatch(pendingTransactions) || friendMatch(pendingSettlements) || friendMatch(bilateralSettlements)
}

export const recentTransactions = state => state.store.recentTransactions

export const pendingTransactions = state => state.store.pendingTransactions

export const pendingSettlements = state => state.store.pendingSettlements

export const bilateralSettlements = state => state.store.bilateralSettlements

export const pendingInviteTxs = state => state.store.pendingInviteTxs

export const getFriends = state => state.store.friends

export const pendingFriends = state => state.store.pendingFriends

export const payPalRequests = (state) : [PayPalRequest] => state.store.payPalRequests

export const getEthBalance = (state) : string => state.store.ethBalance

export const getEthExchange = state => (currency: string) : string => {
  return state.store.ethPrices[currency.toLowerCase()] === undefined ? '200' : state.store.ethPrices[currency.toLowerCase()]
}

export const getEthPrices = (state) : [object] => state.store.ethPrices

export const getERC20EthPrice = state => (symbol: string) : number => {
  return Number(state.store.erc20EthPrices[symbol])
}

export const convertCurrency = state => (fromUcac: string, amount: number) : number => {
  const primaryCurrency = getPrimaryCurrency(state)
  let fromExchange = Number(getEthExchange(state)(getUcacCurrency(state)(fromUcac)))
  fromExchange = hasNoDecimals(getUcacCurrency(state)(fromUcac)) ? fromExchange : fromExchange * 100
  let toExchange = Number(getEthExchange(state)(primaryCurrency.toLowerCase()))
  toExchange = hasNoDecimals(primaryCurrency) ? toExchange : toExchange * 100

  return amount / fromExchange * toExchange
}

export const calculateBalanceAndTransactionNumber = state => (friend?: Friend) => {
  const recent = recentTransactions(state)
  const user = getUser(state)()

  const friends = {}
  let balance = 0, transactionNumber = 0

  recent.forEach( tx => {
    if(friend) {
      if(tx.creditorAddress === friend.address) {
        balance -= convertCurrency(state)(tx.ucac, tx.amount)
        transactionNumber++
      } else if(tx.debtorAddress === friend.address) {
        balance += convertCurrency(state)(tx.ucac, tx.amount)
        transactionNumber++
      }
    } else {
      if(tx.creditorAddress === user.address) {
        balance += convertCurrency(state)(tx.ucac, tx.amount)

        if (friends[tx.debtorAddress] && friends[tx.debtorAddress].balance) {
          friends[tx.debtorAddress].balance -= convertCurrency(state)(tx.ucac, tx.amount)
        } else {
          friends[tx.debtorAddress] = { balance: -(convertCurrency(state)(tx.ucac, tx.amount)) }
        }
      } else {
        if (friends[tx.creditorAddress] && friends[tx.creditorAddress].balance) {
          friends[tx.creditorAddress].balance += convertCurrency(state)(tx.ucac, tx.amount)
        } else {
          friends[tx.creditorAddress] = { balance: convertCurrency(state)(tx.ucac, tx.amount) }
        }

        balance -= convertCurrency(state)(tx.ucac, tx.amount)
      }
      transactionNumber++
    }
  })

  return { balance: Math.round(balance), transactionNumber, friends }
}

export const calculateBalance = state => (friend?: Friend) : number => calculateBalanceAndTransactionNumber(state)(friend).balance

export const calculateTransactionNumber = state => (friend?: Friend) : number => calculateBalanceAndTransactionNumber(state)(friend).transactionNumber

export const calculateCounterparties = state => () => {
  const { friends } = calculateBalanceAndTransactionNumber(state)()

  return Object.values(friends).reduce((counterparties: number, friend: any) => {
    if (friend.balance === 0) {
      return counterparties
    }
    return counterparties + 1
  }, 0)
}

export const calculateUcacBalances = state => (friendAddress: string) : any => {
  const recents = recentTransactions(state)
  const ucacBalances = {}
  let memosSinceSettlement = {}

  let lastSettlementIndex = getSettlementIndex(recents, friendAddress)
  // console.log('LAST ', lastSettlementIndex)
  if (lastSettlementIndex === -1) {
    lastSettlementIndex = recents.length
  }

  recents.map( (tx, ind) => {
    let multiplier
    const currency = getUcacCurrency(state)(tx.ucac)
    if (tx.debtorAddress === friendAddress) {
      multiplier = 1
      memosSinceSettlement = storeMemo(memosSinceSettlement, ind, lastSettlementIndex, tx.memo, currency)
    } else if (tx.creditorAddress === friendAddress) {
      memosSinceSettlement = storeMemo(memosSinceSettlement, ind, lastSettlementIndex, tx.memo, currency)
      multiplier = -1
    } else {
      return
    }
    const value = multiplier * tx.amount
    if (!ucacBalances[currency]) {
      ucacBalances[currency] = value
    } else {
      ucacBalances[currency] += value
    }
  })

  for(let currency in ucacBalances) {
    if(!ucacBalances[currency]) {
      delete ucacBalances[currency]
    }
  }

  return { ucacBalances, memosSinceSettlement }
}

function storeMemo(memos: object, ind: number, lastSettlementIndex: number, memo: string, currency: string) {
  if (!memos[currency]) {
    memos[currency] = []
  }
  if (ind < lastSettlementIndex) {
    memos[currency].push(memo)
  }

  return memos
}

export const getPrimaryCurrency = (state) : string => state.store.primaryCurrency

export const getFriendList = state => () : Friend[] => state.store.friends

export const getFriendsLoaded = state => () : boolean => state.store.friendsLoaded

export const getPendingFromFriend = state => (nick: string) => {
  const friend = state.store.friends.find(fr => fr.nickname === nick)
  if(friend) {
    const pendingTransaction = state.store.pendingTransactions.find(tx => tx.creditorAddress === friend.address || tx.debtorAddress === friend.address)
    const pendingSettlement = state.store.pendingSettlements.find(stmt => stmt.creditorAddress === friend.address || stmt.debtorAddress === friend.address)
    if(pendingSettlement === undefined && pendingTransaction === undefined) {
      return {}
    }
    const route = pendingSettlement ? 'PendingSettlement' : 'PendingTransaction'
    return { route, pendingTransaction, pendingSettlement }
  } else {
    return {}
  }
}

export const getFriendFromNick = state => (nick: string) : Friend | undefined => getFriendList(state)().find( friend => friend.nickname === nick)

export const getFriendFromAddress = state => (address: string) : Friend | undefined => getFriendList(state)().find( friend => friend.address === address)

export const hasStoredUser = state => () : boolean => state.store.hasStoredUser

export const getChannelID = (state) : string => state.store.channelID

function getSettlementIndex(recents: any, friendAddress: String) {
  return recents.findIndex( tx => {
    return (tx.creditorAddress === friendAddress || tx.debtorAddress === friendAddress) &&
    settlementTerms.reduce( (acc, cur) => acc || tx.memo.indexOf(cur) !== -1, false)
  })
}

export const getIdentityVerificationStatus = state => state.store.identityVerificationStatus
