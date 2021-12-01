import React from 'react';

import { Link } from 'react-router-dom';

import './MenuHorizontal.css';

export default function MenuHorizontal() {

  return (

      <div>
        <div className="menuHorizontal">
          <nav className="navMenu">
            <ul>
              <li> <Link to="/"> Início </Link> </li>
              <li> <Link to="/empresa"> Empresas </Link> </li>
              <li> <Link to="/contaReceber"> Contas à Receber </Link> </li>
            </ul>
          </nav>

        </div>

      </div>

  );
}


