import React, { Component } from 'react'

import { Text, TouchableHighlight, View, Image } from 'react-native'
import Button from 'ui/components/button'

import Friend from 'lndr/friend'

import { white } from 'theme/include/colors'

import style from 'theme/account'
import general from 'theme/general'
import friendStyle from 'theme/friend'

import { alreadyFriendsButton, addFriendButton } from 'language'

interface Props {
  onPress: () => void
  friend: Friend
  selected? : boolean
  isFriend? : boolean
}

export default class FriendRow extends Component<Props> {
  constructor() {
    super()
    this.state = {}
  }

  addFriendButton() {
    const { onPress, isFriend } = this.props
    //need check to see if person is friend
    if (isFriend === true) {
      return <Button narrow small round black check friend onPress={onPress} text={alreadyFriendsButton} style={{marginRight: 10}} />
    } else if(isFriend === false) {
      return <Button narrow small round friend onPress={onPress} text={addFriendButton} style={{marginRight: 10}} />
    } else {
      return null
    }
    
  }

  render() {
    const { friend, selected, onPress } = this.props

    return (
      <TouchableHighlight onPress={onPress}>
        <View style={friendStyle.searchRow} >
          <View style={style.pendingTransactionRow}>
            <View style={[general.flexRow, general.alignCenter]}>
              <Image source={require('images/person-outline-dark.png')} style={style.pendingIcon}/>
              <View style={general.flexColumn}>
                <Text style={style.titledPending}>{friend.nickname}</Text>
              </View>
            </View>
            {!selected && this.addFriendButton()}
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
