import React, { Component } from 'react'

import Engine from 'lndr/engine'

import PendingTransaction from 'lndr/pending-transaction'

import { Text, View } from 'react-native'

import Section from 'ui/components/section'
import Popup, { closePopup } from 'ui/components/popup'
import Loading, { LoadingContext } from 'ui/components/loading'

import PendingTransactionDetail from 'ui/dialogs/pending-transaction-detail'
import PendingTransactionRow from 'ui/components/pending-transaction-row'

import style from 'theme/account'

import { pendingTransactionsLanguage } from 'language'

import { withNavigationFocus } from 'react-navigation-is-focused-hoc'

const loadingPendingTransactions = new LoadingContext()

interface Props {
  engine: Engine
  isFocused: boolean
}

interface State {
  pendingTransaction?: PendingTransaction
  pendingTransactionsLoaded: boolean
  pendingTransactions: PendingTransaction[]
}

class PendingTransactionsView extends Component<Props, State> {

  constructor() {
    super()
    this.state = {
      pendingTransactionsLoaded: false,
      pendingTransactions: []
    }
  }

  async componentDidMount() {
    const { engine } = this.props
    const pendingTransactions = await loadingPendingTransactions.wrap(engine.getPendingTransactions())
    this.setState({ pendingTransactionsLoaded: true, pendingTransactions })
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      this.refresh()
    }
  }

  refresh() {
    this.componentDidMount()
  }

  closePopupAndRefresh() {
    closePopup()
    this.refresh()
  }

  renderPendingTransactionDetailDialog() {
    const { pendingTransaction } = this.state

    if (!pendingTransaction) {
      return null
    }

    const { engine } = this.props

    return <Popup onClose={() => this.setState({ pendingTransaction: undefined })}>
      <PendingTransactionDetail
        pendingTransaction={pendingTransaction}
        closePopup={() => this.closePopupAndRefresh()}
        engine={engine}
      />
    </Popup>
  }

  render() {
    const { pendingTransactionsLoaded, pendingTransactions } = this.state
    const { engine } = this.props
    const { user } = engine

    return <View>
      { this.renderPendingTransactionDetailDialog() }

      <Section text='Pending Transactions' contentContainerStyle={style.list}>
        <Loading context={loadingPendingTransactions} />
        {pendingTransactionsLoaded && pendingTransactions.length === 0 ? <Text style={style.emptyState}>{pendingTransactionsLanguage.none}</Text> : null}
        {pendingTransactions.map(
          pendingTransaction => (
            <PendingTransactionRow
              user={user}
              key={pendingTransaction.hash}
              pendingTransaction={pendingTransaction}
              onPress={() => this.setState({ pendingTransaction })}
            />
          )
        )}
      </Section>
    </View>
  }
}

export default withNavigationFocus(PendingTransactionsView, 'Activity')
