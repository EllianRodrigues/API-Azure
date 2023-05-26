const express = require('express')
const app = express()
const sql = require('mssql')

//conexão com o SQL Azure
const config = {
    user: 'esr2',
    password: 'Passarinho60!',
    server: 'ellian.database.windows.net',
    database: 'db-Ellian',
    options: {
      encrypt: true // Se o seu banco de dados requer criptografia, defina como true
    }
  }

  app.get('/', function (req, res) {
    // Conectar ao SQL Azure e executar a consulta
    sql.connect(config, function (err) {
      if (err) {
        console.log(err)
        res.status(500).send('Erro ao conectar ao banco de dados')
        return
      }
  
      // Consulta SQL
      const query = 'SELECT * FROM result_pedestrian'
  
      // Executar a consulta
      new sql.Request().query(query, function (err, result) {
        if (err) {
          console.log(err)
          res.status(500).send('Erro ao executar consulta SQL')
          return
        }
  
        // Enviar os resultados como resposta da API
        res.json(result.recordset)
      })
    })
  })
  
  app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor rodando na porta 3000')
  })