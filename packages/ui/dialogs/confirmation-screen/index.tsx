import React, { Component } from 'react'

import { Text, Image, View, ScrollView, TouchableHighlight } from 'react-native'

import Button from 'ui/components/button'
import DashboardShell from 'ui/components/dashboard-shell'

import general from 'theme/general'
import style from 'theme/confirmation'

import { confirmation } from 'language'

interface Props {
  navigation: any
}

export default class ConfirmationScreen extends Component<Props> {
  getConfirmationImage(type) {
    let imageName = 'create'
    if (type === 'create' || type === 'confirm' || type === 'ethSent' || type === 'bcptSent') {
      return <Image source={require('images/check-circle.png')} style={style.image} />
    } else if (type === 'reject') {
      return <Image source={require('images/thumbs-down.png')} style={style.image} />
    } else {
      return null
    }
  }

  render() {
    const type = this.props.navigation.state.params ? this.props.navigation.state.params.type : 'create'
    let friend = { nickname: 'your friend' }
    let txHash = ''
    let amount = ''
    if (this.props.navigation.state.params) {
      friend = this.props.navigation.state.params.friend
      txHash = this.props.navigation.state.params.txHash
      amount = this.props.navigation.state.params.amount
    }

    return <ScrollView style={[general.fullHeight, general.view]} keyboardShouldPersistTaps='handled'>
      <DashboardShell text={confirmation.shell} navigation={this.props.navigation} />
      <Button close onPress={() => this.props.navigation.navigate('Home')} />
      <View style={[general.centeredColumn, general.standardHMargin]}>
        {this.getConfirmationImage(type)}
        <Text style={style.text}>
          <Text>{confirmation[type].start}</Text>
          <Text style={style.nickname}>{type !== 'ethSent' && type !== 'bcptSent' ? friend.nickname : amount}</Text>
          <Text>{confirmation[type].end}</Text>
          {type === 'ethSent' || type === 'bcptSent' ? <Text style={style.nickname}>{txHash}</Text> : null}
        </Text>
        {type === 'ethSent' || type === 'bcptSent' ? <View style={{marginBottom: 20}}/> : 
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Activity')}>
          <Text style={[style.text, style.spacing]}>
            <Text>{confirmation.status}</Text>
            <Text style={[style.text, style.link]}>{confirmation.activity}</Text>
          </Text>
        </TouchableHighlight>}
        <Button fat wide round onPress={() => this.props.navigation.navigate('Home')} text={confirmation.done} />
      </View>
    </ScrollView>
  }
}
