const sayHi = require('./5-utils')
const name = require('./4-name')
const data = require('./6-alternative-flavor')
console.log(data)
require('./7-mind-granade')

sayHi(name.secret)
sayHi(name.john)
sayHi(name.peter)