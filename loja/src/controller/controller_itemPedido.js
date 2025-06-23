const {
    incluirItemPedido,
    editarParcialmenteItemPedido,
    editarIntegralmenteItemPedido,
    buscarItensPedido,
    buscarItemPedidoPorId,
    deletarItemPedido
} = require('../service/itemPedido/serviceItemPedido.js') // ajuste o caminho conforme seu projeto

// Listar todos os itens de pedido
const listarItensPedido = async (req, res) => {
    const itens = await buscarItensPedido()
    res.json(itens)
}

// Obter um item de pedido pelo id
const obterItemPedido = async (req, res) => {
    const id = parseInt(req.params.id)
    const item = await buscarItemPedidoPorId(id)
    res.json(item)
}

// Criar um novo item de pedido
const criarItemPedido = async (req, res) => {
    const { id, id_pedido, id_produto, qnt } = req.body
    const infos = [id, id_pedido, id_produto, qnt]
    const result = await incluirItemPedido(infos)
    res.json(result)
}

// Atualizar todos os dados do item de pedido
const atualizarItemPedido = async (req, res) => {
    const { id, id_pedido, id_produto, qnt } = req.body
    const infos = [id_pedido, id_produto, qnt]
    const result = await editarIntegralmenteItemPedido(infos, id)
    res.status(200).json(result)
}

// Atualizar parcialmente um campo do item de pedido
const atualizarParcialItemPedido = async (req, res) => {
    const { id, campo, valor } = req.body
    const result = await editarParcialmenteItemPedido(id, campo, valor)
    res.status(200).json(result)
}

// Excluir um item de pedido
const excluirItemPedido = async (req, res) => {
    const { id } = req.body
    const result = await deletarItemPedido(id)
    res.json(result)
}

module.exports = {
    listarItensPedido,
    obterItemPedido,
    criarItemPedido,
    atualizarItemPedido,
    atualizarParcialItemPedido,
    excluirItemPedido
}
