const EventEmitter = require('events')

const customEmitter = new EventEmitter()


// emit depends on where the oon is defined
customEmitter.on('response',(name,id)=>{
    console.log(`data receieved ${name} with id: ${id} `)
})

customEmitter.on('response',()=>{
    console.log(`another logic `)
})

customEmitter.emit('response','john',34)