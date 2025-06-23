const express = require('express')
const router = express.Router()
const produtoController = require('../controller/controller_produto.js')


// Rotas
router.get('/produto', produtoController.listarProdutos)
router.get('/produto/:codigo', produtoController.obterProduto)
router.post('/produto', produtoController.criarProduto)
router.put('/produto', produtoController.atualizarProduto)
router.patch('/produto', produtoController.atualizarParcialProduto)
router.delete('/produto', produtoController.excluirProduto)

// Exporta corretamente o roteador
module.exports = router
