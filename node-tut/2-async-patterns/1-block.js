const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Home Page')
    }
    else if(req.url == '/about'){
        res.end('About Page')
        // For loop is blocking therefore other users access to pages will be halted by this operation
        for (let i = 0; i < 1000; i++){
            for (let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }
    }
    else {
        res.end('Error Page')
    }
})

server.listen(5000,()=>{
    console.log('Server is listening on port 5000....')
})