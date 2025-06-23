require('dotenv').config()
const express = require('express')
const app = express()
const clienteRoutes = require('./src/router/router_cliente.js')
const categoriaRoutes = require('./src/router/router_categoria.js')
const produtoRouter = require("./src/router/router_produto.js")

const { testarConexao, conexao } = require('./src/service/conexao.js') // exemplo

app.use(express.json())

// Rotas baseadas na versão
app.use('/firma/1.0.0', clienteRoutes)
app.use('/firma/1.0.0', categoriaRoutes)
app.use('/firma/1.0.0', produtoRouter)

app.listen(process.env.PORTA, () => {
  console.log(`Operando na porta ${process.env.PORTA}`)
  testarConexao(conexao())
})