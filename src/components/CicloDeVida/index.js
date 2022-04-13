import React, { Component } from "react";

class CicloDeVida extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hora: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() })
    }, 1000);
  }

  componentDidUpdate() {
    console.log('State atualizado!!')
  }

  render() {
    return (
      <div>
        <h1> Hora: {this.state.hora} </h1>
      </div>
    );
  }
}

export default CicloDeVida; 
