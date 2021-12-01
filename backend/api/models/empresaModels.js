const conexao = require('../../config/conexao.js');

module.exports = {
    getAllEmpresa,
    getByIdEmpresa,
    editarEmpresa,
    novaEmpresa            
}

function getAllEmpresa (callback) {
    conexao.query('select * from empresa', callback)
}

function getByIdEmpresa (id, callback) {
    conexao.query('select * from empresa WHERE emp_codigo = ' + id, callback)
}

function novaEmpresa(dados, callback) {
    var msql = 'INSERT INTO empresa SET ? ';

	conexao.query(msql, dados, callback);
}

function editarEmpresa(dados, callback) {
    console.log('Estou alterando o Empresa { M O D E L } .......' + dados);

    var msql = "UPDATE empresa SET emp_nome = '" + dados.emp_nome + 
    "' , emp_fantasia = '" + dados.emp_fantasia +     
    "' , emp_telefone      = '" + dados.emp_telefone + 
    "' , emp_fundacao         = '" + dados.emp_fundacao +
    "'  WHERE emp_codigo  = '" + dados.emp_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}

