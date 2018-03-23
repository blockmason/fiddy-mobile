import React, { Component } from 'react'

import { View, ScrollView, Text, TextInput, TouchableHighlight, Image, Platform } from 'react-native'
import { getResetAction } from 'reducers/nav'

import Friend from 'lndr/friend'
import { formatMemo, currencyFormats, amountFormat } from 'lndr/format'
import defaultCurrency from 'lndr/default-currency'

import Button from 'ui/components/button'
import Checkbox from 'ui/components/checkbox'
import Loading, { LoadingContext } from 'ui/components/loading'
import FriendRow from 'ui/components/friend-row'
import DashboardShell from 'ui/components/dashboard-shell'
import InputImage from 'ui/components/images/input-image'
import Section from 'ui/components/section'
import SearchFriend from 'ui/views/account/friends/search-friend'

import style from 'theme/account'
import formStyle from 'theme/form'
import general from 'theme/general'
import pendingStyle from 'theme/pending'

import language, { currencies } from 'language'
const { debtManagement, noFriends, submit, cancel, back, nickname } = language

import { getStore, pendingTransactions, recentTransactions } from 'reducers/app'
import { addDebt, getFriends, getRecentTransactions } from 'actions'
import { connect } from 'react-redux'

const loadingFriends = new LoadingContext()
const submittingTransaction = new LoadingContext()

interface Props {
  getFriends: () => any
  addDebt: (
    friend: Friend,
    amount: string,
    memo: string,
    direction: string,
    currency: string
  ) => any
  state: any
  pendingTransactions: any
  recentTransactions: any
  navigation: any
}

interface State {
  shouldSelectFriend: boolean
  friend?: Friend
  amount?: string
  memo?: string
  currency: string
  searchText: string
}

class AddDebt extends Component<Props, State> {
  stillRelevant?: boolean

  constructor() {
    super()
    this.state = {
      shouldSelectFriend: false,
      currency: defaultCurrency,
      searchText: ''
    }
  }

  async componentDidMount() {
    this.stillRelevant = true
    const friends = await loadingFriends.wrap(this.props.getFriends())
    this.stillRelevant
  }

  async submit() {
    const direction = this.props.navigation.state.params ? this.props.navigation.state.params.direction : 'lend'
    const { friend, amount, memo, currency } = this.state
    const success = await submittingTransaction.wrap(
      this.props.addDebt(
        friend as Friend,
        amount as string,
        memo as string,
        direction as string,
        currency as string
      )
    )

    this.clear()

    const { navigation } = this.props
    let resetAction
    
    if (success && success.type !== '@@TOAST/DISPLAY_ERROR') {
      resetAction = getResetAction( { routeName:'Confirmation', params: { type: 'create', friend } } )

    } else {
      resetAction = getResetAction( { routeName: 'Dashboard' } )
    }

    navigation.dispatch(resetAction)
  }

  renderSelectedFriend() {
    const { friend } = this.state
    const selectFriend = () => this.setState({ shouldSelectFriend: true })

    if (!friend) {
      return <Button round large onPress={selectFriend} text={debtManagement.selectFriend} />
    }

    return (<TouchableHighlight onPress={selectFriend}>
      <View style={general.centeredColumn}>
        <Text style={style.nickname}>{`@${friend.nickname}`}</Text>
      </View>
    </TouchableHighlight>)
  }

  renderSelectFriend() {
    const { friendsLoaded, friends, pendingTransactions, recentTransactions } = this.props.state
    const { searchText } = this.state

    return <ScrollView style={[general.view, {paddingTop: 30}]} keyboardShouldPersistTaps='handled'>
      <Button close onPress={() => this.setState({ shouldSelectFriend: false })} />
      <View style={{marginTop: 20}} />
      <Section>
        <View style={formStyle.horizontalView}>
          <View style={formStyle.textInputContainer}>
            <InputImage name='search' />
            <TextInput
              style={[style.textInput, {marginLeft: 10}]}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
              placeholder={nickname}
              onChangeText={searchText => this.setState({ searchText })}
            />
          </View>
        </View>
      </Section>
      <View style={style.list}>
        <Loading context={loadingFriends} />
        {friendsLoaded && friends.length === 0 ? <Text style={style.emptyState}>{noFriends}</Text> : null}
        {friends.map(
          friend => friend.nickname.indexOf(searchText) === -1 ? null : (
            <FriendRow
              key={friend.address}
              friend={friend}
              onPress={() => this.setState({ shouldSelectFriend: false, friend })}
              pendingTransactions={pendingTransactions}
              recentTransactions={recentTransactions}
              navigation={this.props.navigation}
            />
          )
        )}
      </View>
    </ScrollView>
  }

  clear() {
    this.setState( { friend: undefined, amount: undefined, memo: undefined } )
  }

  cancel() {
    this.clear()
    this.props.navigation.goBack()
  }

  setAmount(amount) {
    const { currency } = this.state
    return amountFormat(amount, currency)
  }

  render() {
    const direction = this.props.navigation.state.params ? this.props.navigation.state.params.direction : 'lend'

    const { shouldSelectFriend, friend, amount, memo, currency } = this.state

    if (shouldSelectFriend) {
      return this.renderSelectFriend()
    }

    return <ScrollView style={general.whiteFlex} keyboardShouldPersistTaps='handled'>
      <Loading context={submittingTransaction} />
      <DashboardShell text={debtManagement.shell} navigation={this.props.navigation} />
      <Button close onPress={() => this.props.navigation.goBack()} />
      <View style={[general.centeredColumn, {marginBottom: 20}]}>
        <Text style={[style.header, {marginBottom: 20}]}>{debtManagement[direction]}</Text>
        <View style={general.betweenRow} >
          <View style={[general.centeredColumn, {minWidth: 150}]}>
            <Text style={formStyle.title}>{debtManagement.fields.selectFriend}</Text>
            { this.renderSelectedFriend() }
          </View>
          <View style={general.centeredColumn}>
            <Text style={formStyle.title}>{debtManagement.fields.amount}</Text>
            <TextInput
              style={[formStyle.jumboInput, {marginTop: 5}]}
              placeholder={`${currencies[currency]}0`}
              placeholderTextColor='black'
              value={amount}
              maxLength={14}
              underlineColorAndroid='transparent'
              keyboardType='numeric'
              onChangeText={amount => this.setState({ amount: this.setAmount(amount) })}
            />
          </View>
        </View>
        
        <View style={formStyle.memoBorder} >
          <TextInput
            style={formStyle.memoInput}
            placeholder={debtManagement.memo.example}
            value={memo}
            underlineColorAndroid='transparent'
            onChangeText={memo => this.setState({ memo: formatMemo(memo) })}
          />
        </View>
        { friend && amount && memo ? <Button large round wide onPress={() => this.submit()} text={submit} /> : null }
      </View>
    </ScrollView>
  }
}

export default connect((state) => ({ state: getStore(state)(), pendingTransactions: pendingTransactions(state), recentTransactions: recentTransactions(state) }), { addDebt, getFriends })(AddDebt)
