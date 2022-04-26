import React, { Component } from "react";
import './App.css'
import Hooks from "./components/Hooks";
// import Formulario from "./components/Formulatio";
// import Lista from "./components/Lista";
// import RenderizacaoCondicional from "./components/RenderizaçãoCondicional";
// import Membro from "./components/Membro";
// import CicloDeVida from "./components/CicloDeVida";
// import Contador from "./components/Contador";
// import MyProps from "./components/MyProps";

class App extends Component {
  render() {
    return (
      <div className="align-center">
        <div>
          { /* <MyProps nome="Rust" genero="Sobrevivencia"/> */}
          { /* <Contador /> */}
          { /* <CicloDeVida /> */}
          { /* <Membro nome="Visitante" /> */}
          { /* <RenderizacaoCondicional /> */}
          { /* <Lista /> */}
          {/* <Formulario /> */}
          <Hooks />
        </div>
      </div>
    )
  }
}

export default App
