const {
    incluirProduto,
    editarParcialmenteProduto,
    editarIntegralmenteProduto,
    buscarProdutos,
    buscarProdutoCodigo,
    deletarProduto 
  } = require('../service/Produtos/serviceProduto.js') // ou onde estiver seu módulo
  
  const listarProdutos = async (req, res) => {
    const produtos = await buscarProdutos()
    res.json(produtos)
  }
  
  const obterProduto = async (req, res) => {
    const codigo = parseInt(req.params.codigo)
    const produto = await buscarProdutoCodigo(codigo)
    res.json(produto)
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
    listarProdutos,
    obterProduto,
    criarProduto,
    atualizarProduto,
    atualizarParcialProduto,
    excluirProduto
  }
  