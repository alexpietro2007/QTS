const express = require('express')
const router = express.Router()
const statusController = require('../controller/controller_status.js')


// Rotas
router.get('/status', statusController.listarStatus)
router.get('/status/:codigo', statusController.obterStatu)
router.post('/status', statusController.criarStatu)
router.put('/status', statusController.atualizarStatu)
router.patch('/status', statusController.atualizarParcialStatu)
router.delete('/status', statusController.excluirStatu)

// Exporta corretamente o roteador
module.exports = router