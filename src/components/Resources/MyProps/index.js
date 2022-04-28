import React, { Component } from "react";

class Genero extends Component {
  render() {
    return (
      <div>
        <h2> genero: {this.props.genero} </h2>
      </div>
    );
  }
}

class Jogos extends Component {
  render() {
    return (
      <div>
        <h2> nome: {this.props.nome} </h2> { /* usa props que foi passado na chamada da mesma */}
        <Genero genero={this.props.genero} /> {/* posso chamar um component dentro de outro component */}
      </div>
    );
  }
}

class MyProps extends Component {
  render() {
    return (
      <div>
        <h1> Chama component de Jogos: </h1>
        <Jogos nome={this.props.nome} genero={this.props.genero} /> { /*chama component com uma props*/}
      </div>
    )
  }
}

export default MyProps
