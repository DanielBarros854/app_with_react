import React, { Component } from "react";
import CicloDeVida from "./components/CicloDeVida";
// import Contador from "./components/Contador";
// import MyProps from "./components/MyProps";

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
