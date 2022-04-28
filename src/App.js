import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Home from "./pages/Home";
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
import NotFound from "./components/erro/notFound";
import Product from "./pages/Product";

const App = () => {
  return (
    <div className="align-center">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Resources/*" element={< Resources />} >
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
          </Route>
          <Route path="*" element={< NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
