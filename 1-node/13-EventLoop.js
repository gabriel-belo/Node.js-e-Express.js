// const { readFile }= require("fs")

// console.log("started a first task")

// readFile('./content/first.txt', 'utf-8', (err, result) =>{
//     if(err){
//         console.log(err)
//         return
//     }

//     console.log(result)
//     console.log("completed first task")
// })

// console.log("starting next task")

// console.log("first")

// setTimeout(()=>{
//     console.log("second")
// },0)

// console.log('third')


const http= require('http')
const server= http.createServer((req, res) => {
    console.log("request event")
    console.log("hello World")
})

server.listen(5000, () => {
    console.log("server is listening on port 5000")
})