const http = require('http')

//Using Event Emitter API
const server = http.createServer()

//emit arequest event
// subscribe, listen or respond to it
server.on('request',(req,res)=>{
    res.end('Welcome')
})

server.listen(5000)