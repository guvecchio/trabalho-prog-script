const conexao = require('../../config/conexao.js');

module.exports = {
    getAllContaReceber,
    getByIdContaReceber,
    editarContaReceber,
    novaContaReceber            
}

function getAllContaReceber (callback) {
    conexao.query('select * from contareceber', callback)
}

function getByIdContaReceber (id, callback) {
    conexao.query('select * from contareceber WHERE tpr_codigo = ' + id, callback)
}

function novaContaReceber(dados, callback) {
    var msql = 'INSERT INTO contareceber SET ? ';

	conexao.query(msql, dados, callback);
}

function editarContaReceber(dados, callback) {
    console.log('Estou alterando o Conta/Receber { M O D E L } .......' + dados);

    var msql = "UPDATE contareceber SET tpr_descricao = '" + dados.tpr_descricao +     
    "' , tpr_tipo         = '" + dados.tpr_tipo + 
    "' , tpr_valor     = '" + dados.tpr_valor + 
    "' , tpr_vencimento        = '" + dados.tpr_vencimento + 
    "' , emp_codigo        = '" + dados.emp_codigo + 
    "'  WHERE tpr_codigo  = '" + dados.tpr_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}

