const {
    incluirStatu,
    editarParcialmenteStatu,
    editarIntegralmenteStatu,
    buscarStatus,
    buscarStatu,
    deletarStatu 
  } = require('../service/status/serviceStatus.js') // ou onde estiver seu módulo
  
  const listarStatus = async (req, res) => {
    const Status = await buscarStatus()
    res.json(Status)
  }
  
  const obterStatu = async (req, res) => {
    const codigo = parseInt(req.params.codigo)
    const statu = await buscarStatu(codigo)
    res.json(statu);
  }
  
  const criarStatu = async (req, res) => {
    const {codigo, nome} = req.body
    const infos = [codigo, nome]
    const result = await incluirStatu(infos)
    res.json(result)
  }
  
  const atualizarStatu = async (req, res) => {
    const { codigo, nome} = req.body
    const infos = [nome]
    const result = await editarIntegralmenteStatu(infos, codigo)
    res.status(200).json(result)
  }
  
  const atualizarParcialStatu = async (req, res) => {
    const { codigo, campo, valor } = req.body
    const result = await editarParcialmenteStatu(codigo, campo, valor)
    res.status(200).json(result)
  }
  
  const excluirStatu = async (req, res) => {
    const { codigo } = req.body
    const result = await deletarStatu(codigo)
    res.json(result)
  }
  
  module.exports = {
    listarStatus,
    obterStatu,
    criarStatu,
    atualizarStatu,
    atualizarParcialStatu,
    excluirStatu
  }
  