import React, { Component } from "react";

class Formulario extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      gender: "Male",
    }

    this.ChangeEmail = this.ChangeEmail.bind(this);
    this.ChangeGender = this.ChangeGender.bind(this);
  }

  ChangeEmail(event) {
    let inputValue = event.target.value;
    this.setState({ email: inputValue })
  }

  ChangeGender(event) {
    let inputValue = event.target.value;
    this.setState({ gender: inputValue })
  }

  render() {
    return (
      <div>
        <h1>Manipulando formulario</h1>
        Email:
        <input type="email" name="email" value={this.state.email} onChange={this.ChangeEmail} placeholder="example@mail.com" /> <br />
        Senha:
        <input type="password" name="password" value={this.state.password} placeholder="*******"
          onChange={(event) => this.setState({ password: event.target.value })} /> <br />
        Sexo:
        <select name="gender" value={this.state.gender} onChange={this.ChangeGender}>
          <option value="Male">Masculino</option>
          <option value="Female">Feminino</option>
        </select>
        <div>
          <h3>Email: {this.state.email}</h3>
          <h3>Password: {this.state.password}</h3>
          <h3>Gender: {this.state.gender}</h3>
        </div>
      </div>
    );
  }
}

export default Formulario;
