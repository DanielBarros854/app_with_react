import { Link } from "react-router-dom";

import './index.css'
import '../../../style/buttonLink.css'

const Resources = () => {

  return (
    <div className="align-center">
      <h1>Welcome to Resources</h1>
      <div className="resources">
        <div className="resources-column">
          <Link className="button-link" to="/CicloDeVida">CicloDeVida</Link>
          <Link className="button-link" to="/Formulario">Formulario</Link>
          <Link className="button-link" to="/Lista">Lista</Link>
          <Link className="button-link" to="/MyProps">MyProps</Link>
          <Link className="button-link" to="/RequisicaoHTTP">RequisicaoHTTP</Link>
        </div>
        <div className="resources-column">
          <Link className="button-link" to="/Contador">Contador</Link>
          <Link className="button-link" to="/Hooks">Hooks</Link>
          <Link className="button-link" to="/Membro">Membro</Link>
          <Link className="button-link" to="/RenderizacaoCondicional">RenderizacaoCondicional</Link>
        </div>
      </div>
      <div className="button-home">
        <Link className="button-link" to="/">Home</Link>
        <Link className="button-link" to="/About">Sobre</Link>
        <Link className="button-link" to="/Contact">Contact</Link>
      </div>
    </div>
  )
};

export default Resources;
