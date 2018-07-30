import { Buffer } from 'buffer'
import Client from './lib/client'
import JWT from 'jsonwebtoken'
import ethUtil from 'ethereumjs-util'

const PEM = {
  encodePrivateKey: (pubHex, privHex) => {
    return `-----BEGIN PRIVATE KEY-----
${Buffer.from(`308184020100301006072a8648ce3d020106052b8104000a046d306b0201010420${privHex}a144034200${pubHex}`, 'hex').toString('base64')}
-----END PRIVATE KEY-----`
  },
  encodePublicKey: (pubHex) => {
    return `-----BEGIN PUBLIC KEY-----
${Buffer.from(`3056301006072a8648ce3d020106052b8104000a034200${pubHex}`, 'hex').toString('base64')}
-----END PUBLIC KEY-----`
  }
}

export default class PALSClient {
  client: Client

  constructor(baseUrl: string, fetch?: any) {
    this.client = new Client(baseUrl, fetch)
    this.client.setAccept('application/vnd.api+json')
  }

  async authorize(user) {
    const { privateKeyBuffer, address } = user

    const privateKey = (privateKeyBuffer.type === 'Buffer') ? Buffer.from(privateKeyBuffer.data) : privateKeyBuffer
    const ethPublicKey = ethUtil.privateToPublic(privateKey)
    // note: it's an "ethereum" public key, which strips off the first byte 0x04
    const publicKey = Buffer.from(`04${ethPublicKey.toString('hex')}`, 'hex')

    const pub64 = publicKey.toString('base64')
    const pubHex = publicKey.toString('hex')
    const privHex = privateKey.toString('hex')

    // console.log("pub64: " + pub64)
    // console.log("pubHex: " + pubHex)
    // console.log("privHex: " + privHex)
    // console.log("address: " + address)
    // console.log("==============================")

    const token = JWT.sign({
      pub: pub64
    }, PEM.encodePrivateKey(pubHex, privHex), {
      algorithm: 'ES256',
      audience: this.client.baseUrl,
      issuer: pub64,
      subject: `0x${address}`
    })

    // console.log(`Authorized: 0x${address}`)
    console.log(`Bearer ${token}`)
    this.client.setAuthorization(`Bearer ${token}`)
  }

  async checkAuthorized(user) {
      if (!this.client.authorization)
        await this.authorize(user)
      return (this.client.authorization != null)
  }

  async getPayPalAccount(user) {
    const authorized = await this.checkAuthorized(user)
    if (!authorized)
      return null

    try {
      const fullResponse = await this.client.get(`/paypal-accounts`)
      const response = this.handleResponse(fullResponse)
      return (response) ? this.processAccountsResponse(response) : null
    } catch (e) {
      return null
    }
  }

  async getPayPalAccountForFriend(user, friend) {
    const authorized = await this.checkAuthorized(user)
    if (!authorized)
      return null

    try {
      const fullResponse = await this.client.get(`/paypal-accounts?filter=0x${friend.address}`)
      const response = this.handleResponse(fullResponse)
      return (response) ? this.processAccountsResponse(response) : null
    } catch (e) {
      return null
    }
  }

  processAccountsResponse(response) {
    if ( (response) && (response.length > 0) ) {
      // NOTE: the API returns an array of payPal accounts, we only need the first one
      const account = response[0]
      if ( (account.type) && (account.type == "paypal-account") ) {
        return (account.attributes) ? account.attributes.email : null
      }
    }
    return null
    // Sample Response:
    // [{
    //   "attributes":{
    //     "externalId":"AuthorizationCodeForNoNetworkEnvironment"
    //   },
    //   "id":"b-hiNcnum1HqC_7lE5v8yFNOXkMYfr6wXJkpfTitXRM"
    //   ,"relationships":{
    //     "owner":{
    //       "data":{
    //         "id":"0xfe31df89d6152bb89744d41095339c0a9206c9f7"
    //         ,"type":"ethereum-account"
    //       }
    //     }
    //   }
    //   ,"type":"paypal-account"
    // }]
  }

  async authorizeFriend(user, friend) {
    const authorized = await this.checkAuthorized(user)
    if (!authorized)
      return null

    const payload = {
      data: {
        attributes: {
          scope: "paypal-accounts:list"
        }
        ,relationships: {
          grantee: {
            data: {
              id: `0x${friend.address}`
              ,type: "ethereum-account"
            }
          }
        }
        ,type: "authorization"
      }
    }
    try {
      const response = await this.client.post(`/authorizations`, payload)
      const result = this.handleResponse(response)
      return result
    } catch (e) {
      return null
    }
  }

  async createPayPalAccount(user, authToken) {
    const authorized = await this.checkAuthorized(user)
    if (!authorized)
      return null

    const payload = {
      data: {
        attributes: {
          authorizationCode: authToken
        }
        ,type: "paypal-oauth-token"
      }
    }

    // console.log(JSON.stringify(payload))
    try {
      const response = await this.client.post(`/paypal-oauth-tokens`, payload)
      const result = this.handleResponse(response)
      return result
    } catch (e) {
      return null
    }
  }

  async getPayPalOAuthTokens(user) {
    const authorized = await this.checkAuthorized(user)
    if (!authorized)
      return null

    try {
      const fullResponse = await this.client.get(`/paypal-oauth-tokens`)
      const response = this.handleResponse(fullResponse)
      return (response) ? response : null
    } catch (e) {
      return null
    }
  }

  async deletePayPalAccount(user) {
    const authorized = await this.checkAuthorized(user)
    if (!authorized)
      return null

    try {
      // go through each token and delete
      const oauthTokens = await this.getPayPalOAuthTokens(user)
      for (const oauthToken of oauthTokens) {
        if (oauthToken.type !== 'paypal-oauth-token') {
          console.warn('Invalid token type')
          continue
        }

        const response = await this.client.delete(`/paypal-oauth-tokens/${oauthToken.id}`)
        const result = this.handleResponse(response)
        if (!result) {
          console.warn("Unexpected response from server: deletePayPalAccount")
        }
      }
      return null
    } catch (e) {
      // console.warn(e)
      return null
    }
  }

  handleResponse(response) {
    // example:
    // { data: [],
    // jsonapi: '1.0',
    // meta: { name: '@blockmason/pals', version: '0.0.3' } }
    if ( (response.jsonapi == null) || (response.data == null) ) {
      // incorrect formats
      console.log(`Response is not JSONAPI: ${JSON.stringify(response)}`)
      return null
    }

    console.log(`RESPONSE: ${JSON.stringify(response.data)}`)
    return response.data
  }
}

// export const palsClient = new PALSClient('https://sandbox.pals.blockmason.io')
export const palsClient = new PALSClient('https://pals.blockmason.io')
