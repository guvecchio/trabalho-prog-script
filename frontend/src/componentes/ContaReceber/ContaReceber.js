import React from "react"
import './ContaReceber.css';

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaContaReceber";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ContaReceber() {
  const [contaReceber, setContaReceber] = useState([])
  
  useEffect(() => {
    urlapi.get('contaReceber')
      .then(response => setContaReceber(response.data));
  }, []
  )

  return (
    <>
        <div id="idContaReceber" className="contaReceber">
          <div id="corpo_rel">
            <legend> Registros de Contas à Receber Cadastradas</legend>
            <Link to="/contaReceber/0" value={'I'}>incluir Nova Conta à Receber</Link>

            <div>

              <Tabela
                items={contaReceber}
                chave={'/contaReceber/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default ContaReceber;

