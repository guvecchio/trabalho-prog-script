import React from "react"
import './ContaReceberEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function ContaReceberEditar() {
    let idBoolean = false;

    const history = useHistory();

    const [codigo, setCodigo] = useState(0);

    const [descricao, setDescricao] = useState('');
    const [tipo, setTipo] = useState('');
    
    const [valor, setValor] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [codEmp, setCodEmp] = useState('');

    const [checked, setChecked] = useState(false);

    const { idContaReceber } = useParams();

    function IfCrud() {
        console.log('Id Conta Receber: ' + idContaReceber + ' - ' + idBoolean)
        if (idContaReceber === 0) {
            idBoolean = true;
        } else {
        }
    }

    useEffect(() => {
        async function getContaReceber() {
            console.log('Conta à Receber: ' + idContaReceber + ' - ' + idBoolean)
            if (idContaReceber == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                const { data } = await urlapi.get('/contaReceber/' + idContaReceber);
                console.log(data)

                setCodigo(data[0].tpr_codigo);
                setDescricao(data[0].tpr_descricao);
                setTipo(data[0].tpr_tipo);
                setValor(data[0].tpr_valor);
                setVencimento(data[0].tpr_vencimento);
                setCodEmp(data[0].emp_codigo);

                console.log(data[0].tpr_descricao)

            }
        }
        IfCrud();
        getContaReceber();
    }, []);

    async function handleContaReceber(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.tpr_descricao);

        try {
            if (descricao.length === 0) {
                alert('Insira uma descrição válida')
            } else {
                console.log("Codigo Conta: ",idContaReceber)
                if (idContaReceber == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('contaReceber', data);
                } else {
                    console.log("Alteração de Registro! ",idContaReceber)
                    await urlapi.put('/contaReceber/' + idContaReceber, data);
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--contaReceber" onSubmit={handleContaReceber} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="tpr_codigo"
                                value={codigo}
                            />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Descrição </label>
                            <input type="text" className="form-control"
                                name="tpr_descricao"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Tipo de despesa </label>
                            <input type="text" className="form-control" name="tpr_tipo"
                                id="tpr_tipo"
                                value={tipo}
                                onChange={e => setTipo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Valor </label>
                            <input type="text" className="form-control" name="tpr_valor"
                                id="tpr_valor"
                                value={valor}
                                onChange={e => setValor(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Vencimento </label>
                            <input type="text" className="form-control" name="tpr_vencimento"
                                id="tpr_vencimento"
                                value={vencimento}
                                onChange={e => setVencimento(e.target.value)}
                            />
                        </div>
                    </div>

                    
                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Código Empresa </label>
                            <input type="text" className="form-control" name="emp_codigo"
                                id="emp_codigo"
                                value={codEmp}
                                onChange={e => setCodEmp(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/contaReceber" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
