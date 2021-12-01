import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContaReceber from '../ContaReceber/ContaReceber';
import ContaReceberEditar from '../ContaReceber/ContaReceberEditar';
import Empresa from '../Empresa/Empresa';
import EmpresaEditar from '../Empresa/EmpresaEditar';

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/contaReceber" component={ContaReceber}></Route>
        <Route exact path="/contaReceber/:idContaReceber" component={ContaReceberEditar}></Route>
        <Route exact path="/empresa" component={Empresa}></Route>
        <Route exact path="/empresa/:idEmpresa" component={EmpresaEditar}></Route>
      </Switch>

    </div>
  );
}

