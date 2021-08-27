// start os process
console.log('first')
//set timeout is also asynchronous here
setTimeout(()=>{
    console.log('second')
},0)
console.log('third')
//completed and exit os process