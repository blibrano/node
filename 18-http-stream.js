var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    
    //deliver as 1 big pile of data
    //const text = fs.readFileSync('./content/big.txt','utf8')
    //res.end(text)

    //Deliver in chunks
    const fileStream = fs.createReadStream('./content/big.txt','utf8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})
.listen(5000)