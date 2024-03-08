const { createReadStream } = require('fs')
const http = require('http')
const stream = createReadStream('./contest/subfolder/bigFileTxt.txt','utf-8')

const server = http.createServer((req,res)=>{
          stream.on('data', (result) => {
                 res.end(result)
                 stream.pipe()
                  })
})
server.listen(5000)
