const models = require('../models/contaReceberModels.js');

module.exports = {
    contaReceberGetAll,
    contaReceberGetById,
    contaReceberNovo,
    contaReceberEditar,
}

function contaReceberMenu(req, res) {
    res.json('Rota Conta/Receber Encontrada!!!');
    console.log('Rota Conta/Receber Encontrada!!!');
}

function contaReceberGetAll(req, res) {
    console.log('Listar Conta/Receber {M O D E L}');
    models.getAllContaReceber(function (err, resposta) {
        console.log('Retorno de Conta/Receber {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function contaReceberGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdContaReceber(id, function (err, resposta) {
        console.log('Retorno de Conta/Receber Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function contaReceberNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Novo Registro de Conta/Receber...");
    console.log(req.body);
    dados.tpr_codigo = null;
    console.log("Inserindo novo registro de Conta/Receber...");
    models.novaContaReceber(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/contaReceber');
    })
}


function contaReceberEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando Registro de Conta/Receber...",dados);

    models.editarContaReceber(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/contaReceber');
    });
}


