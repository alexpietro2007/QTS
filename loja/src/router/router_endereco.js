const express = require('express')
const router = express.Router()
const controller = require('../controller/controller_endereco.js')  // CORRETO

router.get('/endereco', controller.listarEnderecos)
router.get('/endereco/:id', controller.obterEndereco)
router.post('/endereco', controller.criarEndereco)
router.put('/endereco', controller.atualizarEndereco)
router.patch('/endereco', controller.atualizarParcialEndereco)
router.delete('/endereco', controller.excluirEndereco)

module.exports = router
