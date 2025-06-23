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

async function editarIntegralmenteProduto(infos, codigo) {

  const sql = `UPDATE tbl_produtos SET nome = ?, id_categoria = ?, preco = ? WHERE codigo = ${codigo} ;`
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

async function editarParcialmenteProduto(codigo, campo, valor) {
  const data = [valor, codigo]

  const colunasPermitidas = ['nome', 'id_categoria', 'preco']; // Adicione as colunas permitidas
  if (!colunasPermitidas.includes(campo)) {
    throw new Error('Coluna inválida');
  }

  const sql = `UPDATE tbl_produtos set ${campo} = ? WHERE codigo = ? ;`
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

async function incluirProduto(infos) {
  const data = [infos]
  const sql = `INSERT INTO tbl_produtos (codigo, nome, id_categoria, preco) VALUES ?`
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
  incluirProduto,
  editarParcialmenteProduto,
  editarIntegralmenteProduto,
  buscarProdutos,
  buscarProdutoCodigo,
  deletarProduto 
}
