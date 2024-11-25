const http= require('http')

const server= http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {'content-type' : "text/html"})
        res.write('<h1>Home Page</h1>')
        res.end()
    }
    else if(req.url === "/about"){
        console.log(req.url)
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else{
        //(status code, {headers}) É necessário colocar text/html para ser considerado HTML
        res.writeHead(404, {'content-type': 'text/html'}) 
        //É opcional enviar diretamente pelo res.end() ou utilizar o res.wrtie()
        res.write("<h1>Error</h1>")
        res.end()
    }
    
})

server.listen(5000)