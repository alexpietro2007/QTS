async function buscarCategorias() {
  console.log('DAO de CLIENTE')
  const sql = `SELECT * FROM tbl_categoria;`

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

async function buscarCategoria(codigo) {
  const sql = `SELECT * FROM tbl_categoria WHERE codigo = ?`

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

async function deletarCategoria(codigo) {

  const sql = `DELETE FROM tbl_categoria WHERE codigo = ?`
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

async function editarIntegralmenteCategoria(infos, codigo) {

  const sql = `UPDATE tbl_categoria SET id = ?, nome = ? WHERE codigo = ${codigo} ;`
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

async function editarParcialmenteCategoria(codigo, campo, valor) {
  const data = [valor, codigo]

  const colunasPermitidas = ['nome', 'id']; // Adicione as colunas permitidas
  if (!colunasPermitidas.includes(campo)) {
    throw new Error('Coluna inválida');
  }

  const sql = `UPDATE tbl_categoria set ${campo} = ? WHERE codigo = ? ;`
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

async function incluirCategoria(infos) {
  const data = [infos]
  const sql = `INSERT INTO tbl_categoria (id, nome) VALUES ?`
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
  incluirCategoria,
  editarParcialmenteCategoria,
  editarIntegralmenteCategoria,
  buscarCategoria,
  buscarCategoria,
  deletarCategoria 
}
