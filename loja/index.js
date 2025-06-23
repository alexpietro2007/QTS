require('dotenv').config()
const express = require('express')
const app = express()
const clienteRoutes = require('./src/router/router_cliente.js')
const categoriaRoutes = require('./src/router/router_categoria.js')
const produtoRouter = require("./src/router/router_produto.js")
const statusRouter = require("./src/router/router_status.js")
const enderecoRouter = require("./src/router/router_endereco.js")
const pedidoRouter = require("./src/router/router_pedido.js")
const itemPedidoRouter = require("./src/router/router_itemPedido.js")

const { testarConexao, conexao } = require('./src/service/conexao.js') // exemplo

app.use(express.json())

// Rotas baseadas na versão
app.use('/loja', clienteRoutes)
app.use('/loja', categoriaRoutes)
app.use('/loja', produtoRouter)
app.use('/loja', statusRouter)
app.use('/loja', enderecoRouter)
app.use('/loja', pedidoRouter)
app.use('/loja', itemPedidoRouter)

app.listen(process.env.PORTA, () => {
  console.log(`Operando na porta ${process.env.PORTA}`)
  testarConexao(conexao())
})