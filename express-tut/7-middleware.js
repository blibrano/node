const express = require('express')
const app = express()
const morgan = require('morgan')
// req => middleware => res
// middleware acts between the request and response
// can end with return or next(
const logger = require('./logger')
const authorize = require('./authorize')

// logger and authorize is displayed based on the order
// '/api' is used to determine that this would be used at headers that start with /api
// app.use([logger,authorize]) //our own
// app.use(express.static('./public')) // from express
app.use (morgan('tiny')) //third party
app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/api/products',(req,res)=>{
    res.send('Products')
})

app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send('Items')
})

app.listen(5000,()=>{
    console.log("Server is listening on Port 5000....")
})