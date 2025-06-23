const express = require('express')
const router = express.Router()

const pedidoController = require('../controller/controller_pedido.js') // ajuste o caminho conforme seu projeto

router.get('/pedido', pedidoController.listarPedidos)
router.get('/pedido/:numero', pedidoController.obterPedido)
router.post('/pedido', pedidoController.criarPedido)
router.put('/pedido', pedidoController.atualizarPedido)
router.patch('/pedido', pedidoController.atualizarParcialPedido)
router.delete('/pedido', pedidoController.excluirPedido)

module.exports = router
