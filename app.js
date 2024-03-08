const express = require('express');
const {readFile} = require('fs')
const app = express();

// const homepage = readFile(__dirname + './express-app/index.html')

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about',(req,res)=>{
  res.send('<h1>About Page</h1>');
})

app.all('*',(req,res)=>{
  res.status(404).send('<h1>page not found</h1>');
})


// app.post()
// app.delete('/')
// app.put();
// app.all()
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});