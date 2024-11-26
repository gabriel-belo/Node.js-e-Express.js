const express= require('express')
const app= express()
const {products, } = require('./data.js')

app.get("/", (req, res)=>{
    //Envia uma resposta em JSON(com o content-type correto) este é o parametro convertido para 
    // uma string JSON 
    // res.json(products)

    res.send(`<h1>Home Page</h1><a href='/api/products'>products</a>`)
})

app.get('/api/products', (req, res) =>{
    //selecionando alguns elementos dos objetos
    const newProduct= products.map((product)=>{
        const {id, name, image}= product
        return {id, name, image}
    })
    res.json(newProduct)
})

// Forma básica de criar rotas para elementos de um arquuivo json
// app.get('/api/products/1', (req, res) =>{
//     const singleProduct= products.find((product) =>product.id === 1)

//     res.json(singleProduct)
    
// })

//Criando rotas para cada elemento do objeto e buscando através do url adicionado na página
app.get('/api/products/:productID', (req, res) =>{
    // console.log(req)
    // console.log(req.params)
    const {productID}= req.params
    const singleProduct= products.find((product) => product.id === Number(productID))
    if (!singleProduct){
        return res.status(404).send('<h1>Product not found</h1>')
    }
    return res.json(singleProduct)
})

//Conteúdo mais complexo
// app.get('/api/products/:productID/reviews/:reviewID', (req, res) =>{
//     console.log(req.params)
//     res.send('Hello world')

// })
app.listen(5000, () =>{
    console.log('server is running on port 5000')
})