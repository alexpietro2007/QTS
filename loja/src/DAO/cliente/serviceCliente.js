const { conexao } = require('../conexao.js')


async function buscarClientes() {
  console.log('DAO de CLIENTE')
  const sql = `SELECT * FROM tbl_cliente;`

  const conn = await conexao()
  try {
    // Executar a consulta
    const [rows, fields] = await conn.query(sql);
    await conn.end()
    return rows
  } catch (err) {
    return err.message
  }
}

async function buscarCliente(codigo) {
  const sql = `SELECT * FROM tbl_cliente WHERE codigo = ?`

  const conn = await conexao()

  try {
    // Executar a consulta
    const [rows, fields] = await conn.query(sql, [codigo]);
    await conn.end()
    return rows
  } catch (err) {
    return err.message
  }
}

async function deletarCliente(codigo) {

  const sql = `DELETE FROM tbl_cliente WHERE codigo = ?`
  const conn = await conexao()

  try {
    // Executar a consulta
    const [results] = await conn.query(sql, [codigo]);

    await conn.end()
    return results
  } catch (err) {
    return err.message
  }
}

async function editarIntegralmenteCliente(infos, codigo) {

  const sql = `UPDATE tbl_cliente SET telefone = ?, nome = ?, limite = ?, id_endereco = ?, id_status = ? WHERE codigo = ${codigo} ;`
  const conn = await conexao()

  try {
    // Executar a consulta
    const [results] = await conn.query(sql, [...infos]);

    await conn.end()
    return results
  } catch (err) {
    return err.message
  }
}

async function editarParcialmenteCliente(codigo, campo, valor) {
  const data = [valor, codigo]

  const colunasPermitidas = ['nome', 'email', 'telefone', 'id_endereco', 'id_status', 'limite']; // Adicione as colunas permitidas
  if (!colunasPermitidas.includes(campo)) {
    throw new Error('Coluna inválida');
  }

  const sql = `UPDATE tbl_cliente set ${campo} = ? WHERE codigo = ? ;`
  const conn = await conexao()

  try {
    // Executar a consulta
    const [results] = await conn.query(sql, data);

    await conn.end()
    return results
  } catch (err) {
    return err.message
  }
}

async function incluirCliente(infos) {
  const data = [infos]
  const sql = `INSERT INTO tbl_cliente (codigo, nome, telefone, limite, id_endereco, id_status) VALUES ?`
  const conn = await conexao()

  try {
    // Executar a consulta
    const [results] = await conn.query(sql, [data]);

    await conn.end()
    return results
  } catch (err) {
    return err.message
  }
}

module.exports = {
  incluirCliente,
  editarParcialmenteCliente,
  editarIntegralmenteCliente,
  buscarClientes,
  buscarCliente,
  deletarCliente 

}
