import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {

      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.emp_codigo}>
          <td> {item.emp_codigo} </td>
          <td> {item.emp_nome} </td>
          <td> {item.emp_fantasia} </td>
          <td> {item.emp_telefone} </td>
          <td> {item.emp_fundacao} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.emp_codigo} > Editar </a></td>
          <td> <Link to={props.chave + item.emp_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

          <td> <i className="bi bi-trash"></i> </td>
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'left' }}>
            <th scope="col"> Código Empresa </th>
            <th scope="col"> Nome </th>
            <th scope="col"> Nome Fantasia </th>
            <th scope="col"> Telefone </th>
            <th scope="col"> Fundação </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Nova Empresa</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}