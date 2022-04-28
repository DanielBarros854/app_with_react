import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Contact from "./components/Rotas/Contact";
import About from "./components/Rotas/About";
import Resources from "./components/Rotas/Resources";
import CicloDeVida from "./components/Resources/CicloDeVida";
import Contador from "./components/Resources/Contador";
import Formulario from './components/Resources/Formulario'
import Hooks from "./components/Resources/Hooks";
import Lista from "./components/Resources/Lista";
import Membro from "./components/Resources/Membro";
import MyProps from "./components/Resources/MyProps";
import RenderizacaoCondicional from "./components/Resources/RenderizaçãoCondicional";
import RequisicaoHTTP from "./components/Resources/RequisiçãoHTTP";
import Header from "./components/header";

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Resources" element={< Resources />} />
        <Route path="CicloDeVida" element={< CicloDeVida />} />
        <Route path="Contador" element={< Contador />} />
        <Route path="Formulario" element={< Formulario />} />
        <Route path="Hooks" element={< Hooks />} />
        <Route path="Lista" element={< Lista />} />
        <Route path="Membro" element={< Membro nome="Visitante" />} />
        <Route path="MyProps" element={< MyProps nome="Rust" genero="Sobrevivencia" />} />
        <Route path="RenderizacaoCondicional" element={< RenderizacaoCondicional />} />
        <Route path="RequisicaoHTTP" element={< RequisicaoHTTP />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers;
