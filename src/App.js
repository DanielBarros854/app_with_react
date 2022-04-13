import React, { Component } from "react";
import CicloDeVida from "./page/CicloDeVida";
import Contador from "./page/Contador";
import MyProps from "./page/Props";

class App extends Component {
  render() {
    return (
      <div>
        { /* <MyProps nome="Rust" genero="Sobrevivencia"/> */} 
        { /* <Contador /> */}
        <CicloDeVida />
      </div>
    )
  }
}

export default App
