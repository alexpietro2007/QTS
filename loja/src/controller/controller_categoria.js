const {
  incluirCategoria,
  editarParcialmenteCategoria,
  editarIntegralmenteCategoria,
  buscarCategorias,
  buscarCategoria,
  deletarCategoria 
} = require('../service/Categoria/serviceCategoria.js')

const listarCategoria = async (req, res) => {
  const categoria = await buscarCategorias()
  res.json(categoria)
}

const obterCategoria = async (req, res) => {
  const codigo = parseInt(req.params.codigo)
  const categoria = await buscarCategoria(codigo)
  res.json(categoria)
}

const criarCategoria = async (req, res) => {
  const { codigo, nome } = req.body
  const infos = [id, nome]
  const result = await incluirCategoria(infos)
  res.json(result)
}

const atualizarCategoria = async (req, res) => {
  const { codigo, nome } = req.body
  const infos = [codigo, nome]
  const result = await editarIntegralmenteCategoria(infos, codigo)
  res.status(200).json(result)
}

const atualizarParcialCategoria = async (req, res) => {
  const { codigo, campo, valor } = req.body
  const result = await editarParcialmenteCategoria(codigo, campo, valor)
  res.status(200).json(result)
}

const excluirCategoria = async (req, res) => {
  const { codigo } = req.body
  const result = await deletarCategoria(codigo)
  res.json(result)
}

module.exports = {
  listarCategoria,
  obterCategoria,
  criarCategoria,
  atualizarCategoria,
  atualizarParcialCategoria,
  excluirCategoria
}
