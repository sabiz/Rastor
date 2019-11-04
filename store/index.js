const LENGTH_DEFAULT = 16
const LENGTH_MIN = 1
const LENGTH_MAX = 1024
const TABLE_ALPHABET_NUMBER = 'abcdefghijklmnopqrstuvwxyz1234567890'
const TABLE_UPPERCATE_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const TABLE_SYMBOL = '$%-/=@_'
const TABLE_SPECIAL_SYMBOL = '!"#&amp;\'()*+,.:;&gt;&lt;?[]\\^`{}|~'

export const state = () => ({
  configration: {
    length: LENGTH_DEFAULT,
    includeUpper: true,
    includeSymbol: true,
    includeSpecialSymbol: true
  },
  generatedString: ''
})

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
  toggleIncludeSymbol (state) {
    state.configration.includeSymbol = !state.configration.includeSymbol
  },
  toggleIncludeSpecialSymbol (state) {
    state.configration.includeSpecialSymbol = !state.configration.includeSpecialSymbol
  },
  generate (state) {
    let table = TABLE_ALPHABET_NUMBER
    if (state.configration.includeUpper) {
      table += TABLE_UPPERCATE_ALPHABET
    }

    if (state.configration.includeSymbol) {
      table += TABLE_SYMBOL
    }

    if (state.configration.includeSpecialSymbol) {
      table += TABLE_SPECIAL_SYMBOL
    }

    const array = new Uint32Array(state.configration.length)
    window.crypto.getRandomValues(array)
    let result = ''
    array.forEach((v) => {
      result += table.charAt(v % table.length)
    })
    state.generatedString = result
  }
}
