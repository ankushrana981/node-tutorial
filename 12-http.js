const http = require('http');


const server = http.createServer((req, res) => {
console.log(req.url)
res.write("Welcome to our homepage")
res.end()
});
server.listen(5000,() => {
          console.log('server is listening on port');
});
