// The task of this section is to understand route params and the query
const express = require('express')
const app = express()
const {products} = require('./data')

// basic display of localhost:5000/
app.get('/',(req,res)=>{
    res.send('<h1> Home Page </h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })
    res.json(newProducts)
})

// Test the understanding of : which can be subsituted to any value
app.get('/api/products/:productID',(req,res)=>{
    // console.log(req)
    // console.log(req.params)
    const {productID} = req.params

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    )

    if(!singleProduct){
       return res.status(404).send('Product Does Not Exist') 
    }

    res.json(singleProduct)
})

// test 2 uses of :
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('hello world')
})

// test the use of /api/v1/query?search=X&limit=Y where X and Y are random values
app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    const {search,limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if (limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    if(sortedProducts.length < 1){
        //res.status(200).send('No Product match your search')
        return res.status(200).json({success:true,data:[]})
    }

    return res.status(200).json(sortedProducts)
    //res.send('Hello world')
})

app.listen(5000,()=>{
    console.log('Server is listening on Port 5000...')
})