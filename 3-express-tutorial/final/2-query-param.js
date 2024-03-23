const express = require('express')
const path = require('path')
const app = express()
const {product} = require('./data.js')
const { result } = require('lodash')
// middleware
app.use(express.static('./public'))

app.get('/',(req,res)=>{
  console.log(req.url) 
  console.log(product)
 res.send('<h1>Home Page</h1><a href="/api/products">Go to Product</a>')

})  

app.get('/api/products',(req,res)=>{

  const newProduct = product.map(product => {
    const {id, name, price} = product;
    return {id,name, price}
    })
  res.json(newProduct)
})
// to get single product 

app.get('/api/products/:productID',(req,res)=>{
  const productID = req.params.productID
  console.log(productID)
  const result = product.find((product) => product.id === Number(productID))
  if(!result){
   return res.status(404).json({message: 'Product not found'})
  }
  return res.json(result)
})

app.get('/api/v1/query',(req, res)=>{
  const {search, limit} = req.query;
  console.log(search)
 let sortedProduct = [...product]

 if(search){
  sortedProduct = sortedProduct.filter((product) => {
    return product.name.startsWith(search);
  })
  if(limit){
    sortedProduct = sortedProduct.slice(0,Number(limit));
  }
  if(sortedProduct < 1){
    return res.status(200).json({status: 'success', data :sortedProduct});
  }
  return res.status(200).json(sortedProduct)
 }

})

app.get('*',(req,res)=>{
  res.status(404).send('Page not Found !!!')
})    

app.listen(5000,()=>{
  console.log('Server is listening on port 5000 :');
})