const http= require('http')

//res.write() para mandar dados aos poucos, e depois encerrar com res.end()
const server= http.createServer((req, res) => {
    if(req.url === "/"){
        //Finaliza a resposta HTTP
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Welcome to our about page')
    }
    res.end(`
    <h1>Oops!<h1> 
    <p>We can't seem to find the page you are looking for</p>
    <a href='/'> back home</a> 
    `)

})

server.listen(5000) 