import React, { Component } from "react";
import Membro from "./components/Membro";
// import CicloDeVida from "./components/CicloDeVida";
// import Contador from "./components/Contador";
// import MyProps from "./components/MyProps";

class App extends Component {
  render() {
    return (
      <div>
        { /* <MyProps nome="Rust" genero="Sobrevivencia"/> */} 
        { /* <Contador /> */}
        { /* <CicloDeVida /> */}
        <Membro nome="Visitante" />
      </div>
    )
  }
}

export default App
