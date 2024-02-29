
const os = require('os')

// info about the user 

const user = os.userInfo()

console.log(user)

console.log(`the systum uptime is ${os.uptime()} Seconds`)


const currentOS ={
          name:os.type(),
          release:os.release(),
          totalMem: os.totalmem(),
          freemem: os.freemem()
}
console.log(currentOS)