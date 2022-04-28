import React, { Component } from "react";

class Contador extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };

    this.aumentar = this.aumentar.bind(this); /* necessario para que reconheça comandos do react na função */
    this.diminuir = this.diminuir.bind(this); /* necessario para que reconheça comandos do react na função */
  }

  aumentar() {
    let state = this.state; // Pego o valor da state
    state.contador += 1; // incremento valor da state
    this.setState(state) // atualizo o valor da state 
  }

  diminuir() {
    let state = this.state; // Pego o valor da state
    if(state.contador === 0) {
      alert('Zerou');
      return;
    }
    state.contador -= 1; // decremento valor da state
    this.setState(state) // atualizo o valor da state 
  }

  render() {
    return (
      <div>
        <button onClick={this.diminuir}>-</button> { /* Chamar função em um botão */}
        {this.state.contador}
        <button onClick={this.aumentar}>+</button>
      </div>
    )
  }
}

export default Contador
