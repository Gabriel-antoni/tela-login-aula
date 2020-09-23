import React, { Component } from "react";
import "./login.css";

export default class Login extends Component {
  state = {
    usuario: "",
    Senha: "",
    erro: ""
  };

  setUsuario = (event) => {
    this.setState({ usuario: event.target.value });
  };

  setSenha = (event) => {
    this.setState({ Senha: event.target.value });
  };

  fazerLogin = (event) => {
    event.preventDefault();
    if (this.state.usuario === "aaa" && this.state.Senha === "123") {
      this.setState({ erro: "" });
      this.props.history.push("/home");
    } else {
      this.setState({ erro: "Usuario ou senha invalidos" });
    }
  };

  render() {
    return (
      <div>
        <h1>Bem vindo ao Login</h1>
        <form>
          {this.state.erro && <p id="erro">{this.state.erro}</p>}
          <label>Usuario</label>
          <input
            type="text"
            placeholder="informe usuario"
            value={this.state.usuario}
            onChange={this.setUsuario}
          />
          <br /> <br />
          <label>Senha</label>
          <input
            type="password"
            placeholder="informe Senha"
            value={this.state.Senha}
            onChange={this.setSenha}
          />
          <br />
          <br />
          <button onClick={this.fazerLogin}>Entrar</button>
        </form>
      </div>
    );
  }
}
