import './MenuBotoes.css';
import { Link } from 'react-router-dom';

export default function MenuBotoes() {
  return (
    <div className = "menuBotoes">

      <Link to="/empresa"><button type="button" id="btnEmpresas" className="btn btn-success"> Empresas </button></Link>
      <Link to="/contaReceber"><button type="button" id="btnContasReceber" className="btn btn-danger"> Contas à Receber </button></Link>
      
    </div>
  );
}

