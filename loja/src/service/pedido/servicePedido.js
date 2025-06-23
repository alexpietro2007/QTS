const { conexao } = require('../conexao.js')

// Buscar todos os pedidos
async function buscarPedidos() {
    const sql = `SELECT * FROM tbl_pedido;`
    const conn = await conexao()

    try {
        const [rows] = await conn.query(sql)
        await conn.end()
        return rows
    } catch (err) {
        return err.message
    }
}

// Buscar pedido por número
async function buscarPedidoPorNumero(numero) {
    const sql = `SELECT * FROM tbl_pedido WHERE numero = ?`
    const conn = await conexao()

    try {
        const [rows] = await conn.query(sql, [numero])
        await conn.end()
        return rows
    } catch (err) {
        return err.message
    }
}

// Inserir um novo pedido
async function incluirPedido(infos) {
    const sql = `INSERT INTO tbl_pedido (numero, data_elaboracao, cliente_id) VALUES (?, ?, ?)`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, infos)
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

// Atualizar todos os dados do pedido
async function editarIntegralmentePedido(infos, numero) {
    const sql = `
    UPDATE tbl_pedido
    SET data_elaboracao = ?, cliente_id = ?
    WHERE numero = ?
  `
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [...infos, numero])
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

// Atualizar parcialmente um campo do pedido
async function editarParcialmentePedido(numero, campo, valor) {
    const colunasPermitidas = ['data_elaboracao', 'cliente_id']
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida')
    }

    const sql = `UPDATE tbl_pedido SET ${campo} = ? WHERE numero = ?`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [valor, numero])
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

// Excluir pedido pelo número
async function deletarPedido(numero) {
    const sql = `DELETE FROM tbl_pedido WHERE numero = ?`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [numero])
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

module.exports = {
    incluirPedido,
    editarParcialmentePedido,
    editarIntegralmentePedido,
    buscarPedidos,
    buscarPedidoPorNumero,
    deletarPedido
}
