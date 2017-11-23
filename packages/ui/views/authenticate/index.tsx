import React, { Component } from 'react'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { ScrollView } from 'react-native'

import Engine from 'lndr/engine'

import Alert from 'ui/components/alert'
import ThemeImage from 'ui/components/images/theme-image'
import FadeInView from 'ui/components/fade-in-view'

import LoginView from './login'
import CreateAccountView from './create-account'
import RecoverAccountView from './recover-account'
import RemoveAccountView from './remove-account'
import ConfirmAccountView from './confirm-account'

import general from 'theme/general'
import style from 'theme/authenticate'

interface Props {
  engine: Engine,
  hasStoredUser?: boolean
  shouldRecoverAccount?: boolean
  shouldRemoveAccount?: boolean
  shouldConfirmAccount?: boolean
  mnemonic?: string
}

export default class AuthenticateView extends Component<Props> {
  render() {
    return <ScrollView style={[general.flex, general.defaultBackground]}>
      <FadeInView style={style.main}>
        <ThemeImage name='logo' />
        {this.renderView()}
      </FadeInView>
      <KeyboardSpacer />
    </ScrollView>
  }

  renderView() {
    const {
      engine,
      hasStoredUser,
      shouldRecoverAccount,
      shouldRemoveAccount,
      shouldConfirmAccount,
      mnemonic
    } = this.props

    if (shouldRemoveAccount) {
      return <RemoveAccountView engine={engine} />
    }

    if (hasStoredUser) {
      return <LoginView engine={engine} />
    }

    if (shouldRecoverAccount) {
      return <RecoverAccountView engine={engine} />
    }

    if (shouldConfirmAccount) {
      return <ConfirmAccountView engine={engine} mnemonic={mnemonic} />
    }

    return <CreateAccountView engine={engine} />
  }
}
