import { Link, Route, Routes } from "react-router-dom";

import './index.css'
import '../../style/buttonLink.css'
import CicloDeVida from "../../components/Resources/CicloDeVida";
import Contador from "../../components/Resources/Contador";
import Formulario from "../../components/Resources/Formulario";
import Hooks from "../../components/Resources/Hooks";
import Lista from "../../components/Resources/Lista";
import Membro from "../../components/Resources/Membro";
import MyProps from "../../components/Resources/MyProps";
import RenderizacaoCondicional from "../../components/Resources/RenderizaçãoCondicional";
import RequisicaoHTTP from "../../components/Resources/RequisiçãoHTTP";
import Product from "../Product";
import NotFound from '../../components/erro/notFound.js'

const Resources = () => {

  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route path="CicloDeVida" element={< CicloDeVida />} />
      <Route path="Contador" element={< Contador />} />
      <Route path="Formulario" element={< Formulario />} />
      <Route path="Hooks" element={< Hooks />} />
      <Route path="Lista" element={< Lista />} />
      <Route path="Membro" element={< Membro nome="Visitante" />} />
      <Route path="MyProps" element={< MyProps nome="Rust" genero="Sobrevivencia" />} />
      <Route path="RenderizacaoCondicional" element={< RenderizacaoCondicional />} />
      <Route path="RequisicaoHTTP" element={< RequisicaoHTTP />} />
      <Route path="Product/:id" element={<Product />} />
      <Route path="*" element={< NotFound />} />
    </Routes>
  )
};

const Layout = () => {
  return (
    <div className="align-center">
      <h1>Welcome to Resources</h1>
      <div className="resources">
        <div className="resources-column">
          <Link className="button-link" to="CicloDeVida">Ciclo De Vida</Link>
          <Link className="button-link" to="Formulario">Formulario</Link>
          <Link className="button-link" to="Lista">Lista</Link>
          <Link className="button-link" to="MyProps">My Props</Link>
          <Link className="button-link" to="RequisicaoHTTP">Requisicao HTTP</Link>
        </div>
        <div className="resources-column">
          <Link className="button-link" to="Contador">Contador</Link>
          <Link className="button-link" to="Hooks">Hooks</Link>
          <Link className="button-link" to="Membro">Membro</Link>
          <Link className="button-link" to="RenderizacaoCondicional">Renderizacao Condicional</Link>
          <Link className="button-link" to="Product/12">Produto</Link>
        </div>
      </div>
      <div className="button-home">
        <Link className="button-link" to="/">Home</Link>
        <Link className="button-link" to="/About">Sobre</Link>
        <Link className="button-link" to="/Contact">Contact</Link>
      </div>
    </div>
  )
}

export default Resources;
