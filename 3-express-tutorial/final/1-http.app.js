const http = require('http')
const {readFileSync} = require('fs')

//get all files 
const hompage = readFileSync('./express-app/index.html')
const homeStyles = readFileSync('./express-app/style.css')
const homelogo = readFileSync('./express-app/logo.jpg')


const server = http.createServer((req, res) => {
  // req = user is sending a POST request
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(hompage);
    res.end();
  } else if (url === "/style.css"){ 
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }  
  else if (url === "/logo.jpg") {
    res.writeHead(200, { "content-type": "image/jpg+xml" });
    res.write(homelogo);
    res.end();
  }  
    else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  } 
});
server.listen(5000);
