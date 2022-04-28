import React, { Component } from "react";


class Membro extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: props.nome,
    };

    this.login = this.login.bind(this);
  };

  login(nome) {
    this.setState({ nome });
  }

  render() {
    return (
      <div>
        <h2>{this.state.nome} Chegou aqui!</h2>
        <button onClick={() => this.login("Daniel")}>
          Login
        </button>
        <button onClick={() => this.setState({ nome: "Visitante" })}>
          Sair
        </button> { /* Função anonima */}
      </div>
    );
  }
}

export default Membro
