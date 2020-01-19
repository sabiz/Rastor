const LENGTH_DEFAULT = 16
const LENGTH_MIN = 1
const LENGTH_MAX = 1024
const TABLE_ALPHABET_NUMBER = 'abcdefghijklmnopqrstuvwxyz1234567890'
const TABLE_UPPERCATE_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const TABLE_ARRAY_SYMBOL = [
  '()', '[]', '{}', '<>',
  '$', '%', '@', '#', '&', '?', '!',
  '-', '=', '_', '/', '*', '+', '\\', '|', '~',
  '"', '\'', '`', '^', ',', '.', ':', ';'
]

export const state = () => {
  const symbols = {}
  TABLE_ARRAY_SYMBOL.forEach((key) => { symbols[key] = false })
  return {
    configration: {
      length: LENGTH_DEFAULT,
      includeUpper: true,
      includeSymbol: symbols
    },
    generatedString: ''
  }
}

export const mutations = {
  setStringLength (state, length) {
    if (length < LENGTH_MIN || length > LENGTH_MAX) {
      return false
    }
    state.configration.length = length
    return true
  },
  toggleIncludeUpper (state) {
    state.configration.includeUpper = !state.configration.includeUpper
  },
  toggleIncludeSymbol (state, key) {
    state.configration.includeSymbol[key] = !state.configration.includeSymbol[key]
  },
  generate (state) {
    let table = TABLE_ALPHABET_NUMBER
    if (state.configration.includeUpper) {
      table += TABLE_UPPERCATE_ALPHABET
    }

    Object.keys(state.configration.includeSymbol).forEach((v) => {
      if (state.configration.includeSymbol[v]) {
        table += v
      }
    })

    const array = new Uint32Array(state.configration.length)
    window.crypto.getRandomValues(array)
    let result = ''
    array.forEach((v) => {
      result += table.charAt(v % table.length)
    })
    state.generatedString = result
  }
}
