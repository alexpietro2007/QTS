const {
  buscarClientes,
  buscarCliente,
  incluirCliente,
  editarIntegralmenteCliente,
  editarParcialmenteCliente,
  deletarCliente
} = require('../service/cliente/serviceCliente.js') // ou onde estiver seu módulo

const listarClientes = async (req, res) => {
  const clientes = await buscarClientes()
  res.json(clientes)
}

const obterCliente = async (req, res) => {
  const codigo = parseInt(req.params.codigo)
  const cliente = await buscarCliente(codigo)
  res.json(cliente)
}

const criarCliente = async (req, res) => {
  const { codigo, nome, limite, telefone, id_endereco, id_status } = req.body
  const infos = [codigo, nome, telefone, limite, id_endereco, id_status]
  const result = await incluirCliente(infos)
  res.json(result)
}

const atualizarCliente = async (req, res) => {
  const { codigo, nome, limite, telefone, id_endereco, id_status } = req.body
  const infos = [telefone, nome, limite, id_endereco, id_status]
  const result = await editarIntegralmenteCliente(infos, codigo)
  res.status(200).json(result)
}

const atualizarParcialCliente = async (req, res) => {
  const { codigo, campo, valor } = req.body
  const result = await editarParcialmenteCliente(codigo, campo, valor)
  res.status(200).json(result)
}

const excluirCliente = async (req, res) => {
  const { codigo } = req.body
  const result = await deletarCliente(codigo)
  res.json(result)
}

module.exports = {
  listarClientes,
  obterCliente,
  criarCliente,
  atualizarCliente,
  atualizarParcialCliente,
  excluirCliente
}
