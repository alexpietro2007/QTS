const express = require('express')
const router = express.Router()
const categoriaController = require('../controller/controller_categoria.js')

router.get('/categorias', categoriaController.listarCategoria)
router.get('/categoria/:codigo', categoriaController.obterCategoria)
router.post('/categoria', categoriaController.criarCategoria)
router.put('/categoria', categoriaController.atualizarCategoria)
router.patch('/categoria', categoriaController.atualizarParcialCategoria)
router.delete('/categoria', categoriaController.excluirCategoria)

module.exports = router
