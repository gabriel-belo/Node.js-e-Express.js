//Opção 1
const express= require('express')
const app= express()

//Opção 2
// const app= require('express')()

//(caminho, callback function)
//A callback function neste caso será invocada sempre que  o usuário performar uma requisição get

app.get('/', (req, res) => {
    console.log('Olá, mundo!')
    res.status(200).send('Home page')
})

app.get("/about", (req, res) => {
    res.status(200).send("About Page") 
})

//* é igual a todos
app.all('*', (req, res) => {
    res.status(404).send("<h1>Resource not found</h1>")
})



app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000')
})
// métodos
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
