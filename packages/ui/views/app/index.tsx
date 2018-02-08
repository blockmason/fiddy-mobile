import React, { Component } from 'react'

// TODO Remove button / go through the entire import dependecy list
import { View, ScrollView, Button } from 'react-native'

import AuthenticateView from 'ui/views/authenticate'
import WelcomeView from 'ui/views/welcome'

import { PopupTarget } from 'ui/components/popup'
import ThemeImage from 'ui/components/images/theme-image'
import AndroidStatusBar from 'ui/components/android-status-bar'
import { UserData } from 'lndr/user'

import { Provider } from 'react-redux'
import createStore from 'store'
import { setWelcomeComplete, initializeStorage } from 'actions'
import { getStore, getUser } from 'reducers/app'
import AppWithNavigationState from 'navigators'
import { connect } from 'react-redux'
import { Toast, ToastActionsCreators } from 'react-native-redux-toast'

import style from 'theme/general'

interface Props {}

interface AppContentsProps {
  initializeStorage: () => any
  setWelcomeComplete: () => any
  user: UserData
  state: any
}

const initialState = {
  hasStoredUser: false,
  welcomeComplete: false,
  isAuthLoading: false,
  shouldRecoverAccount: false,
  shouldRemoveAccount: false,
  shouldDisplayMnemonic: false,
  isInitializing: true,
  friendsLoaded: false,
  friends: [],
  balancesLoaded: false,
  balances: [],
  recentTransactionsLoaded: false,
  recentTransactions: [],
  accountInformationLoaded: false,
  pendingTransactionsLoaded: false,
  pendingTransactions: [],
  pendingSettlements: [],
  bilateralSettlements: [],
  notificationsEnabled: true,
  ethBalance: '0',
  ethExchange: '1000',
  bcptBalance: '0',
  bcptExchange: '0.5',
  userPic: ''
}

const store = createStore(initialState)

// TODO Move this route based code into navigators
class AppContentsView extends Component<AppContentsProps> {
  componentDidMount() {
    this.props.initializeStorage()
  }

  render() {
    const {
      isInitializing,
      welcomeComplete,
      shouldDisplayMnemonic,
      displayTouchID
    } = this.props.state

    if (isInitializing) {
      return <View />
    }

    if (!welcomeComplete) {
      return <WelcomeView onComplete={this.props.setWelcomeComplete}/>
    }

    if (!this.props.user || shouldDisplayMnemonic) {
      return <AuthenticateView />
    }

    return <AppWithNavigationState />
  }
}

const mapStateToProps = (state) => ({ state: getStore(state)(), user: getUser(state)() })
const mapDispatchToProps = (dispatch) => ({
  setWelcomeComplete: () => dispatch(setWelcomeComplete(true)),
  initializeStorage: () => dispatch(initializeStorage())
})

const AppContents = connect(mapStateToProps, mapDispatchToProps)(AppContentsView)

export default class AppView extends Component {
  render() {
    return (
      <Provider store={store}>
        <ScrollView style={style.flex} contentContainerStyle={style.flexGrow} keyboardShouldPersistTaps='handled'>
          <AndroidStatusBar />
          <PopupTarget />
          <AppContents />
          <Toast />
        </ScrollView>
      </Provider>
    )
  }
}
