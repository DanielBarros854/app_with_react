import React, { Component } from "react";

class Formulario extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: {
        email: "",
        password: "",
        gender: "Male",
      }
    }
    this.HandleChangeInput = this.HandleChangeInput.bind(this)
  }

  HandleChangeInput(event) {
    let form = this.state.form;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  }

  render() {
    return (
      <div>
        <h1>Manipulando formulario</h1>
        Email:
        <input type="email" name="email" value={this.state.form.email} placeholder="example@mail.com"
          onChange={this.HandleChangeInput} /> <br />
        Senha:
        <input type="password" name="password" value={this.state.form.password} placeholder="*******"
          onChange={this.HandleChangeInput} /> <br />
        Sexo:
        <select name="gender" value={this.state.form.gender}
          onChange={this.HandleChangeInput}>
          <option value="Male">Masculino</option>
          <option value="Female">Feminino</option>
        </select>
        <div>
          <h3>Email: {this.state.form.email}</h3>
          <h3>Password: {this.state.form.password}</h3>
          <h3>Gender: {this.state.form.gender}</h3>
        </div>
      </div>
    );
  }
}

export default Formulario;
