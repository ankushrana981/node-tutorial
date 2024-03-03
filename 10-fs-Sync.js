const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./contest/first.txt','utf-8')
const second = readFileSync('./contest/second.txt','utf-8')
console.log(first)
console.log(second)

writeFileSync('./contest/result.txt',`Here is the result : ${first}  ${second}`,
{flag:'a'}
) 