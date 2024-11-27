const express= require('express')
const app= express()
const morgan= require('morgan')
const logger= require('./logger')
const authorize= require('./authorize')


//1. use vs route
//2. opções- nosso / express / de terceiros
//Nosso- criado por mim
//Express- O express tem alguns  middleware contruídos
//Um exemplo é o express.static() 
//de terceiros- criado por outras pessoas
//morgan('tiny') provem os métodos mais básicos
app.use(morgan('tiny'))
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