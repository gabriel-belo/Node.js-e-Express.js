const express= require('express')
const app= express()
const logger= require('./logger')
const authorize= require('./authorize')

// req => middleware => res
// req => middleware => res => next middleware => res
//O express envia o req, res e next por trás das cortinas neste caso para o logger
//Sempre que usar um middleware é necessário passar para o próximo, ou seja, usar 
// next(), só não deve ser usado caso esteja terminando o ciclo que então deve ser usado
//res.end()


//Para não precisar adicionar o logger em todos os métodos usamos app.use(logger) para que 
// adicione diretamente a todos
//Se a rota estiver antes do app.use()  o método não receberá o middleware
//Podemos adicionar um caminho no método use() e as rotas que estão dentro deste caminho 
//Recebem o middleware do método

//1. use vs route
//2. options - our own / express / third party
app.use([logger, authorize])


// app.get('/', logger,(req, res)=>{
//     res.send("Home")
// })

app.get('/',(req, res)=>{
    res.send("Home")
})
app.get('/about', (req, res)=>{
    res.send("About")
})

app.get('/api/products', (req, res)=>{
    res.send("Products")
})

app.get('/api/items', (req, res)=>{
    console.log(req.user)
    res.send("Items")
})
app.listen(5000, 
    console.log("Server is listening on port 5000...")
)