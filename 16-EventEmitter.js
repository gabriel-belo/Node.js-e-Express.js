const EventEmitter= require('events')

//Criando instância da classe
const customEmitter= new EventEmitter()

//on - escuta a um evento
//emit- emite um evento
customEmitter.on('response', (name, id)=> {
    console.log(`Data received: name: ${name} and id: ${id}`)
})

customEmitter.on('response', ()=> {
    console.log('some other logic here')
})

//emitindo o evento, Primeiro a chave que caso bata no on com o emit irá atender o 
//callback do on, os outris valores são variáveis que podem ser passadas
customEmitter.emit('response', 'john', 34)

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
