import React, { Component } from 'react'

import { Text, Image, View, ScrollView, TouchableHighlight } from 'react-native'
import firebase from 'react-native-firebase'

import { getResetAction } from 'reducers/nav'

import Button from 'ui/components/button'
import DashboardShell from 'ui/components/dashboard-shell'

import general from 'theme/general'
import style from 'theme/confirmation'

import languageText, { language } from 'language'
const { confirmation } = languageText

interface Props {
  navigation: any
}

export default class ConfirmationScreen extends Component<Props> {
  componentDidMount( ) {
    firebase.analytics().setCurrentScreen('confirmation-screen', 'ConfirmationScreen');
  }

  getConfirmationImage(type) {
    const acceptList = ['create', 'confirm', 'ethSent', 'bcptSent', 'confirmFriend', 'requestPayPalPayee', 'requestPayPalPayment', 'settledWithPayPal']
    const rejectList = ['reject', 'rejectFriend', 'rejectOutboundFriendRequest']
    if (acceptList.indexOf(type) >= 0) {
      return <Image source={require('images/check-circle.png')} style={style.image} />
    } else if (rejectList.indexOf(type) >= 0) {
      return <Image source={require('images/thumbs-down.png')} style={style.image} />
    } else {
      return null
    }
  }

  goHome() {
    this.props.navigation.dispatch( getResetAction({ routeName: 'Dashboard' }) )
  }

  goActivity() {
    this.props.navigation.dispatch( getResetAction({ routeName: 'Dashboard', params: { to: 'activity' } }) )
  }

  displayMessage() {
    const type = this.props.navigation.state.params ? this.props.navigation.state.params.type : 'create'
    let friend = { nickname: 'your friend' }
    let txHash = ''
    let amount = ''
    if (this.props.navigation.state.params) {
      if (this.props.navigation.state.params.friend)
        friend = this.props.navigation.state.params.friend
      if (this.props.navigation.state.params.txHash)
        txHash = this.props.navigation.state.params.txHash
      if (this.props.navigation.state.params.amount)
        amount = this.props.navigation.state.params.amount
    }

    if (language === 'ja' && (type === 'ethSent' || type === 'bcptSent')) {
      return <Text style={style.text}>
        <Text style={style.nickname}>{type !== 'ethSent' && type !== 'bcptSent' ? `@${friend.nickname}` : amount}</Text>
        <Text>{confirmation[type].start}</Text>
        <Text>{confirmation[type].end}</Text>
        {type === 'ethSent' || type === 'bcptSent' ? <Text style={style.nickname}>{txHash}</Text> : null}
      </Text>
    }

    return <Text style={style.text}>
      <Text>{confirmation[type].start}</Text>
      <Text style={style.nickname}>{type !== 'ethSent' && type !== 'bcptSent' ? `@${friend.nickname}` : amount}</Text>
      <Text>{confirmation[type].end}</Text>
      {type === 'ethSent' || type === 'bcptSent' ? <Text style={style.nickname}>{txHash}</Text> : null}
    </Text>
  }

  render() {
    const type = this.props.navigation.state.params ? this.props.navigation.state.params.type : 'create'

    return <View style={general.whiteFlex}>
      <View style={general.view}>
        <DashboardShell text={confirmation.shell} navigation={this.props.navigation} />
        <Button close onPress={() => this.goHome()} />
      </View>
      <ScrollView style={[general.whiteFlex]} keyboardShouldPersistTaps="always">
        <View style={[general.centeredColumn, general.standardHMargin]}>
          {this.getConfirmationImage(type)}
          {this.displayMessage()}
          {type === 'ethSent' || type === 'bcptSent' || type === 'confirmFriend' || type === 'rejectFriend' ? <View style={{marginBottom: 20}}/> :
          <TouchableHighlight onPress={() => this.goActivity()}>
            <Text style={[style.text, style.spacing]}>
              <Text>{confirmation.status}</Text>
              <Text style={[style.text, style.link]}>{confirmation.activity}</Text>
            </Text>
          </TouchableHighlight>}
          <Button fat wide round onPress={() => this.goHome()} text={confirmation.done} />
        </View>
      </ScrollView>
    </View>
  }
}
