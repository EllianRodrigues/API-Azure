const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World! Teste API RailWay')
})

app.listen(21262,()=>{
    console.log('Express started at http://localhost:21262')
})