const { conexao } = require('../conexao.js')

// Buscar todos os endereços
async function buscarEndereco() {
  const sql = `SELECT * FROM tbl_endereco;`
  const conn = await conexao()

  try {
    const [rows] = await conn.query(sql)
    await conn.end()
    return rows
  } catch (err) {
    return err.message
  }
}

// Buscar um endereço por ID
async function buscarEnderecoPorId(id) {
  const sql = `SELECT * FROM tbl_endereco WHERE id = ?`
  const conn = await conexao()

  try {
    const [rows] = await conn.query(sql, [id])
    await conn.end()
    return rows
  } catch (err) {
    return err.message
  }
}

// Incluir um novo endereço
async function incluirEndereco(infos) {
  const sql = `INSERT INTO tbl_endereco (id, logradouro, cep, numero, bairro, cidade) VALUES (?, ?, ?, ?, ?, ?)`
  const conn = await conexao()

  try {
    const [results] = await conn.query(sql, infos)
    await conn.end()
    return results
  } catch (err) {
    return err.message
  }
}

// Atualizar todos os campos do endereço
async function editarIntegralmenteEndereco(infos, id) {
  const sql = `
    UPDATE tbl_endereco 
    SET logradouro = ?, cep = ?, numero = ?, bairro = ?, cidade = ?
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

// Atualizar apenas um campo do endereço
async function editarParcialmenteEndereco(id, campo, valor) {
  const colunasPermitidas = ['logradouro', 'cep', 'numero', 'bairro', 'cidade']
  if (!colunasPermitidas.includes(campo)) {
    throw new Error('Coluna inválida')
  }

  const sql = `UPDATE tbl_endereco SET ${campo} = ? WHERE id = ?`
  const conn = await conexao()

  try {
    const [results] = await conn.query(sql, [valor, id])
    await conn.end()
    return results
  } catch (err) {
    return err.message
  }
}

// Excluir um endereço
async function deletarEndereco(id) {
  const sql = `DELETE FROM tbl_endereco WHERE id = ?`
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
  incluirEndereco,
  editarParcialmenteEndereco,
  editarIntegralmenteEndereco,
  buscarEndereco,
  buscarEnderecoPorId,
  deletarEndereco
}
