const express = require('express')
const router = express.Router()

const itemPedidoController = require('../controller/controller_itemPedido.js') // ajuste o caminho conforme seu projeto

router.get('/itempedido', itemPedidoController.listarItensPedido)
router.get('/itempedido/:id', itemPedidoController.obterItemPedido)
router.post('/itempedido', itemPedidoController.criarItemPedido)
router.put('/itempedido', itemPedidoController.atualizarItemPedido)
router.patch('/itempedido', itemPedidoController.atualizarParcialItemPedido)
router.delete('/itempedido', itemPedidoController.excluirItemPedido)

module.exports = router
