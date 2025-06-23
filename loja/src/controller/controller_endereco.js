const {
  incluirEndereco,
  editarParcialmenteEndereco,
  editarIntegralmenteEndereco,
  buscarEndereco,
  buscarEnderecoPorId,
  deletarEndereco
} = require('../service/endereço/serviceEndereço.js') // ajuste o caminho se necessário

// Listar todos os endereços
const listarEnderecos = async (req, res) => {
  const enderecos = await buscarEndereco()
  res.json(enderecos)
}

// Obter um endereço pelo ID
const obterEndereco = async (req, res) => {
  const id = parseInt(req.params.id)
  const endereco = await buscarEnderecoPorId(id)
  res.json(endereco)
}

// Criar um novo endereço
const criarEndereco = async (req, res) => {
  const { id, logradouro, cep, numero, bairro, cidade } = req.body
  const infos = [id, logradouro, cep, numero, bairro, cidade]
  const result = await incluirEndereco(infos)
  res.json(result)
}

// Atualizar todos os dados de um endereço
const atualizarEndereco = async (req, res) => {
  const { id, logradouro, cep, numero, bairro, cidade } = req.body
  const infos = [logradouro, cep, numero, bairro, cidade]
  const result = await editarIntegralmenteEndereco(infos, id)
  res.status(200).json(result)
}

// Atualizar parcialmente um campo do endereço
const atualizarParcialEndereco = async (req, res) => {
  const { id, campo, valor } = req.body
  const result = await editarParcialmenteEndereco(id, campo, valor)
  res.status(200).json(result)
}

// Excluir um endereço
const excluirEndereco = async (req, res) => {
  const { id } = req.body
  const result = await deletarEndereco(id)
  res.json(result)
}

module.exports = {
  listarEnderecos,
  obterEndereco,
  criarEndereco,
  atualizarEndereco,
  atualizarParcialEndereco,
  excluirEndereco
}
