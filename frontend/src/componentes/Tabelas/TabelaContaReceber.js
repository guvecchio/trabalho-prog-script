import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
      
      
      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.tpr_codigo}>
          <td> {item.tpr_codigo} </td>
          <td> {item.tpr_descricao} </td>
          <td> {item.tpr_tipo} </td>
          <td> {item.tpr_valor} </td>
          <td> {item.tpr_vencimento} </td>
          <td> {item.emp_codigo} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.tpr_codigo} > Editar </a></td>

          <td> <Link to={props.chave + item.tpr_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

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
            <th scope="col"> Código Conta </th>
            <th scope="col"> Descrição </th>
            <th scope="col"> Tipo </th>
            <th scope="col"> Valor </th>
            <th scope="col"> Vencimento </th>
            <th scope="col"> Codígo Empresa </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Nova Conta</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}