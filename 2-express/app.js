const express= require('express')
const app= express()
const people  = require('./routes/people')
const auth  = require('./routes/auth')

//ativos staticos
app.use(express.static('./methods-public'))

//analisar dados do formulário
app.use(express.urlencoded({extended: false}))

//analisar json
app.use(express.json())

app.use('/api/people', people )

app.use('/login', auth) 


app.listen(5000, 
    console.log("Server is listening on port 5000...")
) 