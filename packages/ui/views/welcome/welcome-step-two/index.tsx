import React, { Component } from 'react'
import { Image, View, Text, ScrollView, TouchableHighlight, Dimensions } from 'react-native'
import firebase from 'react-native-firebase'

import Button from 'ui/components/button'
import AndroidStatusBar from 'ui/components/android-status-bar'
import TextLogo from 'ui/components/images/text-logo'

import general from 'theme/general'
import style from 'theme/slide'
import tabStyle from 'theme/tabs'
import accountStyle from 'theme/account'

import language from 'language'
const { walkthrough, inviteFriends, tabs } = language

export default class WelcomeStepTwoView extends Component {
  componentDidMount( ) {
    firebase.analytics().setCurrentScreen('welcome-step-two', 'WelcomeStepTwoView');
  }
  render() {
    const kSmallScreenThreshold = 320 // e.g. iPhone SE
    const { width } = Dimensions.get('window')
    const logoSize = (width > kSmallScreenThreshold) ? "normal" : "small"
    const logoContainerStyle = (width > kSmallScreenThreshold) ? accountStyle.dashboardLogo : accountStyle.dashboardLogoSmall

    const settingsButton = (<View style={accountStyle.settingsButton}>
      <View style={accountStyle.settingsTriangleLeft}/>
      <TouchableHighlight onPress={() => null} underlayColor='aqua'>
        <View style={accountStyle.settingsBackground}>
          <Image source={require('images/settings.png')} style={tabStyle.settingsButton} />
        </View>
      </TouchableHighlight>
      <View style={accountStyle.settingsTriangleRight}/>
    </View>)

    return (
      <ScrollView>
        <View style={general.view}>
          <AndroidStatusBar />
          <View style={accountStyle.dashboardContainer}>
            <View style={logoContainerStyle}>
              <TextLogo name='white' size={logoSize}/>
            </View>
            <View style={tabStyle.leftTriangle}/>
            <View style={tabStyle.tabsContainer}>
              <Image style={style.redCircle} source={require('images/drawn-circle-red.png')}/>
              <Text style={style.dashboardText}>{tabs.home}</Text>
              <Text style={[style.dashboardText, tabStyle.underlineActive]}>{tabs.friends}</Text>
              <Text style={style.dashboardText}>{tabs.activity}</Text>
            </View>
          </View>
          {settingsButton}
        </View>
        {/* <Image style={style.fullWidthImage225} source={require('images/walkthrough2-header.png')} /> */}

        <View style={style.topView}>
          <Text style={style.caption}>{walkthrough.step2.getStarted}</Text>
          <Button small round text={inviteFriends} onPress={() => null} />
          <Text style={style.caption}>{walkthrough.step2.friendsScreen}</Text>

          <Image style={style.fullWidthImage35} source={require('images/walkthrough2-sample.png')} />
{/*
          <View style={general.flex}>
            <Text style={style.caption}>Once your friend confirms their invitation, you’ll be all set to record transactions together on the Blockchain!</Text>
            <View style={{height:80}}>
              <Image resizeMode="contain" style={{flex: 1}} source={require('images/walkthrough-checkcircle.png')} />
            </View>
          </View>
*/}
        </View>
      </ScrollView>
    )
  }
}
