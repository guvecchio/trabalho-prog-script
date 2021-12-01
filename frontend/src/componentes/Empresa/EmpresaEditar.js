import React from "react"
import './EmpresaEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function EmpresaEditar() {
    let idBoolean = false;        

    const history = useHistory();


    const [codigo, setCodigo] = useState(0);

    const [nome, setNome] = useState('');
    const [fantasia, setFantasia] = useState('');
    
    const [telefone, setTelefone] = useState('');
    const [fundacao, setFundacao] = useState('');

    const [checked, setChecked] = useState(false);

    const { idEmpresa } = useParams();

    function IfCrud() {
        
        console.log('Id Empresa: ' + idEmpresa + ' - ' + idBoolean)
        if (idEmpresa === 0) {
            
            idBoolean = true;
        } else {
            
        }
        
    }

    useEffect(() => {
        async function getEmpresa() {
            console.log('Empresa: ' + idEmpresa + ' - ' + idBoolean)
            if (idEmpresa == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                
                const { data } = await urlapi.get('/empresa/' + idEmpresa);
                console.log(data)

                setCodigo(data[0].emp_codigo);

                setNome(data[0].emp_nome);
                setFantasia(data[0].emp_fantasia);
                setTelefone(data[0].emp_telefone);
                setFundacao(data[0].emp_fundacao);

                console.log(data[0].emp_nome)

            }
        }
        IfCrud();
        getEmpresa();
    }, []);



    async function handleEmpresa(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.emp_nome);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Empresa: ",idEmpresa)
                if (idEmpresa == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('empresa', data);
                } else {
                    console.log("Alteração de Registro! ",idEmpresa)
                    await urlapi.put('/empresa/' + idEmpresa, data);
                }
               
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--empresa" onSubmit={handleEmpresa} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="emp_codigo"
                                value={codigo}
                            />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome da Empresa </label>
                            <input type="text" className="form-control"
                                name="emp_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome Fantasia </label>
                            <input type="text" className="form-control" name="emp_fantasia"
                                id="emp_fantasia"
                                value={fantasia}
                                onChange={e => setFantasia(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Telefone </label>
                            <input type="text" className="form-control" name="emp_telefone"
                                id="emp_telefone"
                                value={telefone}
                                onChange={e => setTelefone(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Fundação </label>
                            <input type="text" className="form-control" name="emp_fundacao"
                                id="emp_fundacao"
                                value={fundacao}
                                onChange={e => setFundacao(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/empresa" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
