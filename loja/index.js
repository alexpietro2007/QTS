require('dotenv').config()
const express = require('express')
const app = express()
const clienteRoutes = require('./src/router/router_cliente')
const { testarConexao, conexao } = require('./src/DAO/conexao.js') // exemplo

app.use(express.json())

// Rotas baseadas na versão
app.use('/firma/1.0.0', clienteRoutes)

app.listen(process.env.PORTA, () => {
  console.log(`Operando na porta ${process.env.PORTA}`)
  testarConexao(conexao())
  console.log("amem")
})
