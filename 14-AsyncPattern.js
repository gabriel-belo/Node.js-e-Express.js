// const { readFile, writeFile}= require("fs")

// console.log("start")

// readFile("./content/first.txt", 'utf-8', (err, result) =>{
//     if(err){
//         console.log(err)
//         return 
//     }
//     const first= result
//     readFile("./content/second.txt", 'utf-8', (err, result) =>{
//         if(err){
//             console.log(err)
//             return
//         }
//         const second= result
//         console.log(second)
//     })
//     console.log(first)
// })

const http= require('http')

const server= http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Home Page")
    }

    if(req.url === '/about'){
        // for(let i=0; i< 1000; i++){
        //     for(let j=0; j< 1000; j++){
        //         console.log(`${i} ${j}`)
        //     }
        // }
        res.end("About Page") 
    }

    res.end("Error Page")
})

server.listen(5000, ()=> {
    console.log("server is running on port 5000")
})