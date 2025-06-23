const {
    incluirPedido,
    editarParcialmentePedido,
    editarIntegralmentePedido,
    buscarPedidos,
    buscarPedidoPorNumero,
    deletarPedido
} = require('../service/pedido/servicePedido.js') // ajuste o caminho conforme seu projeto

// Listar todos os pedidos
const listarPedidos = async (req, res) => {
    const pedidos = await buscarPedidos()
    res.json(pedidos)
}

// Obter pedido por número
const obterPedido = async (req, res) => {
    const numero = parseInt(req.params.numero)
    const pedido = await buscarPedidoPorNumero(numero)
    res.json(pedido)
}

// Criar um novo pedido
const criarPedido = async (req, res) => {
    const { numero, data_elaboracao, cliente_id } = req.body
    const infos = [numero, data_elaboracao, cliente_id]
    const result = await incluirPedido(infos)
    res.json(result)
}

// Atualizar todos os dados do pedido
const atualizarPedido = async (req, res) => {
    const { numero, data_elaboracao, cliente_id } = req.body
    const infos = [data_elaboracao, cliente_id]
    const result = await editarIntegralmentePedido(infos, numero)
    res.status(200).json(result)
}

// Atualizar parcialmente um campo do pedido
const atualizarParcialPedido = async (req, res) => {
    const { numero, campo, valor } = req.body
    const result = await editarParcialmentePedido(numero, campo, valor)
    res.status(200).json(result)
}

// Excluir pedido
const excluirPedido = async (req, res) => {
    const { numero } = req.body
    const result = await deletarPedido(numero)
    res.json(result)
}

module.exports = {
    listarPedidos,
    obterPedido,
    criarPedido,
    atualizarPedido,
    atualizarParcialPedido,
    excluirPedido
}
