const http= require('http')
const { readFileSync }= require('fs')

const homePage= readFileSync('./navbar-app/index.html')
const homeStyle= readFileSync( './navbar-app/styles.css')
const homeImage= readFileSync('./navbar-app/logo.svg')
const homeLogic= readFileSync('./navbar-app/browser-app.js')


const server= http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {'content-type' : "text/html"})
        res.write(homePage)
        res.end()
    }
    else if(req.url === "/about"){
        console.log(req.url)
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else if(req.url === "/styles.css"){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }
    else if(req.url === "/logo.svg"){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if(req.url === "/browser-app.js"){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
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