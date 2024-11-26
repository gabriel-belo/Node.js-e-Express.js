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

app.get('/api/v1/query', (req, res) =>{
    // console.log(req.query)

    const {search, limit}=req.query
    let sortedProducts= [...products]
    if(search){
        sortedProducts= sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts= sortedProducts.slice(0, Number(limit))
    } 
    if (sortedProducts.length === 0){
        return res.status(200).json({succes: true, data: []}) 
    }
    res.status(200).json(sortedProducts)
    // res.end('hello world');
})
app.listen(5000, () =>{
    console.log('server is running on port 5000')
})