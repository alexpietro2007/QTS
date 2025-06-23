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
  
  const obterProduto = async (req, res) => {
    const codigo = parseInt(req.params.codigo)
    const produto = await buscarProdutoodigo(codigo)
    res.json(produto)C
  }
  
  const criarProduto = async (req, res) => {
    const { codigo, nome, id_categoria, preco} = req.body
    const infos = [codigo, nome, id_categoria, preco]
    const result = await incluirProduto(infos)
    res.json(result)
  }
  
  const atualizarProduto = async (req, res) => {
    const { codigo, nome, id_categoria, preco} = req.body
    const infos = [nome, id_categoria, preco]
    const result = await editarIntegralmenteCliente(infos, codigo)
    res.status(200).json(result)
  }
  
  const atualizarParcialProduto = async (req, res) => {
    const { codigo, campo, valor } = req.body
    const result = await editarParcialmenteProduto(codigo, campo, valor)
    res.status(200).json(result)
  }
  
  const excluirProduto = async (req, res) => {
    const { codigo } = req.body
    const result = await deletarProduto(codigo)
    res.json(result)
  }
  
  module.exports = {
    listarStatus,
    obterProduto,
    criarProduto,
    atualizarProduto,
    atualizarParcialProduto,
    excluirProduto
  }
  