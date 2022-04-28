import React, { Component } from "react";

class RenderizacaoCondicional extends Component {

  constructor(props) {
    super(props)
    this.state = {
      status: true,
      saldo: 10000,
      btnValue: 'Esconder Saldo',
    };

    this.AlterarVisibilidadeSaldo = this.AlterarVisibilidadeSaldo.bind(this)
  }

  AlterarVisibilidadeSaldo() {
    const state = this.state
    if (state.status) {
      state.status = false;
      state.btnValue = 'Mostrar Saldo';
    } else {
      state.status = true;
      state.btnValue = 'Esconder Saldo';
    }
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h2>Renderização Condicional</h2>
        <h2>Seu saldo é { this.state.status ? this.state.saldo : '*****' }</h2>
        <button onClick={this.AlterarVisibilidadeSaldo}>
          {this.state.btnValue}
        </button>
      </div>
    );
  }
}

export default RenderizacaoCondicional
