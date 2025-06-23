const { conexao } = require('../conexao.js')


async function buscarStatus() {
  console.log('Service de Status')
  const sql = `SELECT * FROM tbl_status;`

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

async function buscarStatu(codigo) {
  const sql = `SELECT * FROM tbl_status WHERE codigo = ?`

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

async function deletarStatu(codigo) {

  const sql = `DELETE FROM tbl_status WHERE codigo = ?`
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

async function editarIntegralmenteStatu(infos, codigo) {

  const sql = `UPDATE tbl_produtos SET nome WHERE codigo = ${codigo} ;`
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

async function editarParcialmenteStatu(codigo, campo, valor) {
  const data = [valor, codigo]

  const colunasPermitidas = ['nome']; // Adicione as colunas permitidas
  if (!colunasPermitidas.includes(campo)) {
    throw new Error('Coluna inválida');
  }

  const sql = `UPDATE tbl_status set ${campo} = ? WHERE codigo = ? ;`
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

async function incluirStatu(infos) {
  const data = [infos]
  const sql = `INSERT INTO tbl_produtos (id, nome) VALUES ?`
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
  incluirStatu,
  editarParcialmenteStatu,
  editarIntegralmenteStatu,
  buscarStatus,
  buscarStatu,
  deletarStatu 
}
