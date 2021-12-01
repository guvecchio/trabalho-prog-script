const models = require('../models/empresaModels.js');

module.exports = {
    empresaGetAll,
    empresaGetById,
    empresaNovo,
    empresaEditar,
}

function empresaMenu(req, res) {
    res.json('Rota Empresa Encontrada!!!');
    console.log('Rota Empresa Encontrada!!!');
}

function empresaGetAll(req, res) {
    console.log('Listar Empresa {M O D E L}');
    models.getAllEmpresa(function (err, resposta) {
        console.log('Retorno de Empresa {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function empresaGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdEmpresa(id, function (err, resposta) {
        console.log('Retorno de Empresa Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function empresaNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Novo Registro de Empresa...");
    console.log(req.body);
    dados.emp_codigo = null;
    console.log("Inserindo novo registro de Empresa...");
    models.novaEmpresa(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/empresa');
    })
}


function empresaEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando Registro de Empresa...",dados);

    models.editarEmpresa(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/empresa');
    });
}


