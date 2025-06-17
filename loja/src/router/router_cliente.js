const express = require('express')
const router = express.Router()
const clienteController = require('../controller/controller_cliente.js')


// Rotas
router.get('/clientes', clienteController.listarClientes)
router.get('/cliente/:codigo', clienteController.obterCliente)
router.post('/cliente', clienteController.criarCliente)
router.put('/cliente', clienteController.atualizarCliente)
router.patch('/cliente', clienteController.atualizarParcialCliente)
router.delete('/cliente', clienteController.excluirCliente)

// Exporta corretamente o roteador
module.exports = router
