const http= require('http')
const EventEmitter= require('events')

// const server= http.createServer((req, res)=>{
//     res.end("Welcome")
// })

//Usando a API Event Emitter
const server= http.createServer()
//emits request event
//subscribe to it/ listen to it/ respond it
server.on('request', (req, res) =>{
    res.end("Welcome")
})

server.listen(5000)
