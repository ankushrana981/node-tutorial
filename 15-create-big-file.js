const {writeFileSync} = require('fs')

for(var i = 0; i < 10000; i++){
          writeFileSync('./contest/subfolder/bigFileTxt.txt',`Hello world ${i}\n`,{flag:'a'})    
}