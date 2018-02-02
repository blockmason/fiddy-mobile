export const commas = value => {
  return String(value).replace(/(\d{3})+$/g,
    full => full.replace(/\d{3}/g, group => `,${group}`)
  ).replace(/^,/, '')
}

export const leftPad = (pad, length, value) => {
  while (value.length > length && value[0] === pad) {
    value = value.substr(1)
  }
  while (value.length < length) {
    value = `${pad}${value}`
  }
  return value
}

export const cents = value => {
  const sign = value < 0 ? '-' : ''
  const raw = String(Math.abs(value))
  const [ left, right ] = [ raw.substr(0, raw.length - 2), raw.substr(-2) ]
  return `${sign}${commas(left) || '0'}.${leftPad('0', 2, right)}`
}

export const dollars = value => {
  const raw = String(Math.round(Math.abs(value / 100)))
  return `${commas(raw) || '0'}`
}

export const currency = value => {
  const raw = value
    .replace(/[^\.\d]/g, '')
    .replace('.', 'DOT')
    .replace(/\./g, '')
    .replace('DOT', '.')
    .replace(/^\./, '0.')
    .replace(/^0\d/, x => x[1])
    .replace(/\.\d{3,}/, x => `.${x.substr(-2)}`)

  const hasDecimal = value.indexOf('.') !== -1

  if (hasDecimal) {
    let [ left, right ] = raw.split('.')
    while (right.length > 2) {
      left = `${left}${right[0]}`
      right = right.substr(1)
    }
    return `$${commas(left)}.${right}`
  }

  return `$${commas(raw)}`
}

export const formatNick = nick => nick.replace(/[^A-Za-z0-9]/g, '')

export const formatMemo = memo => memo.replace(/^\s/, '').replace(/\s\s$/, ' ')

export const formatPin = pin => pin.replace(/[^0-9]/g, '')

export const formatLockTimeout = timeout => timeout.replace(/[^0-9]/g, '')

export const ethAddress = addr => addr.replace(/[g-z]/gi, '').replace(/[^a-z0-9]/gi, '').toLowerCase()

export const ethAmount = amount => amount.replace(/[^0-9\.]/g, '')
