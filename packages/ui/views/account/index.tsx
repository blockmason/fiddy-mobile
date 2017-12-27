import React, { Component } from 'react'

import Engine from 'lndr/engine'

import { View, Text } from 'react-native'

import Tabs, { Tab } from 'ui/components/tabs'
import ActionButton from 'ui/components/action-button'
import Badge from 'ui/components/badge'

import AndroidStatusBar from 'ui/components/android-status-bar'

import HomeView from './home'
import FriendsView from './friends'
import PendingView from './activity/pending'

import general from 'theme/general'
import style from 'theme/account'

import { accountViewLanguage } from 'language'

interface Props {
  engine: Engine
  pendingTransactionsCount?: number
}

export default class AccountView extends Component<Props> {
  home: any
  friends: any
  pending: any
  tabs: any

  constructor(props) {
    super(props)
    props.engine.initalizePushNotifications()
  }

  getPendingBadge() {
    const { pendingTransactionsCount } = this.props

    if (typeof pendingTransactionsCount === 'undefined' || pendingTransactionsCount === 0) {
      return null
    }

    else if (pendingTransactionsCount > 9) {
      return <Badge danger text='9+' />
    }

    else {
      return <Badge danger text={String(pendingTransactionsCount)} />
    }
  }

  render() {
    const { engine } = this.props


    return <View style={[general.flex, style.whiteBackground]}>
      <AndroidStatusBar />
      <Text style={style.topText}>{accountViewLanguage.lndr}</Text>
      <Tabs ref={tabs => this.tabs = tabs}>
        <Tab reference='home' text={accountViewLanguage.home} onRefresh={() => this.home.refresh()}>
          <HomeView engine={engine} ref={home => this.home = home} />
        </Tab>
        <Tab reference='friends' text={accountViewLanguage.friends} onRefresh={() => this.friends.refresh()}>
          <FriendsView engine={engine} ref={friends => this.friends = friends} />
        </Tab>
        <Tab reference='pending' text={accountViewLanguage.activity} badge={this.getPendingBadge()}>
          <PendingView engine={engine} ref={pending => this.pending = pending} />
        </Tab>
      </Tabs>
      <ActionButton
        onLogout={() => engine.logoutAccount()}
        onMyAccount={() => this.tabs.switchTo('home').then(() => this.home.showMyAccount())}
      />
    </View>
  }
}
