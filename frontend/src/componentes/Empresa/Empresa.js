import React from "react"
import './Empresa.css';

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaEmpresa";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Empresa() {
  const [empresa, setEmpresa] = useState([])
  
  useEffect(() => {
    urlapi.get('empresa')
      .then(response => setEmpresa(response.data));
  }, []
  )

  return (
    <>
        <div id="idEmpresa" className="empresa">
          <div id="corpo_rel">
            <legend> Registros de Empresas Cadastradas</legend>
            <Link to="/empresa/0" value={'I'}>Incluir Nova Empresa</Link>

            <div>

              <Tabela
                items={empresa}
                chave={'/empresa/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Empresa;

