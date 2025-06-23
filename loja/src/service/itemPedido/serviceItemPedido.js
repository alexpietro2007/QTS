const { conexao } = require('../conexao.js')

// Buscar todos os itens de pedido
async function buscarItensPedido() {
    const sql = `SELECT * FROM tbl_itempedido;`
    const conn = await conexao()

    try {
        const [rows] = await conn.query(sql)
        await conn.end()
        return rows
    } catch (err) {
        return err.message
    }
}

// Buscar item de pedido pelo id
async function buscarItemPedidoPorId(id) {
    const sql = `SELECT * FROM tbl_itempedido WHERE id = ?`
    const conn = await conexao()

    try {
        const [rows] = await conn.query(sql, [id])
        await conn.end()
        return rows
    } catch (err) {
        return err.message
    }
}

// Inserir um novo item de pedido
async function incluirItemPedido(infos) {
    const sql = `INSERT INTO tbl_itempedido (id, id_pedido, id_produto, qnt) VALUES (?, ?, ?, ?)`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, infos)
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

// Atualizar integralmente um item de pedido
async function editarIntegralmenteItemPedido(infos, id) {
    const sql = `
    UPDATE tbl_itempedido
    SET id_pedido = ?, id_produto = ?, qnt = ?
    WHERE id = ?
  `
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [...infos, id])
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

// Atualizar parcialmente um campo do item de pedido
async function editarParcialmenteItemPedido(id, campo, valor) {
    const colunasPermitidas = ['id_pedido', 'id_produto', 'qnt']
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida')
    }

    const sql = `UPDATE tbl_itempedido SET ${campo} = ? WHERE id = ?`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [valor, id])
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

// Deletar um item de pedido pelo id
async function deletarItemPedido(id) {
    const sql = `DELETE FROM tbl_itempedido WHERE id = ?`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [id])
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

module.exports = {
    incluirItemPedido,
    editarParcialmenteItemPedido,
    editarIntegralmenteItemPedido,
    buscarItensPedido,
    buscarItemPedidoPorId,
    deletarItemPedido
}
