import React from "react";
import { FormInput }  from "./FormInput";

export class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      nome:"",
      cidade:"",
      email:"",
      telefone:"",
      cpf:"",
    }
  }

  // Atualiza o state do input
  onChangeInput = (name, value) => this.setState({ [name]: value });

  // Valida o email
  validateEmail = (email) => email.includes("@") && email.includes(".");

  // Valida se todos os inputs estão preenchidos
  handleSubmitForm = event => {
    event.preventDefault();
    const {nome, cidade, email, telefone, cpf} = this.state;

  if(!this.validateEmail(email)) {
    return alert("Por favor, insira um email válido!");
  }

  if(!nome || !cidade || !email || !telefone || !cpf) {
    return alert("Por favor, preencha todos os campos!")
  }
  };


  render() {
      console.log(this.state)
      return (
        <div className="RegisterForm">
            <form className="form" onSubmit={this.handleSubmitForm}>
              <FormInput 
                  name="nome" 
                  label="Nome" 
                  type="text" 
                  value={this.state.nome} 
                  onChangeInput={this.onChangeInput}/>
              <FormInput 
                  name="cidade" 
                  label="Cidade" 
                  type="text" 
                  value={this.state.cidade} 
                  onChangeInput={this.onChangeInput}/>
              <FormInput 
                  name="email" 
                  label="Email" 
                  type="email" 
                  placeholder="email@email.com" 
                  value={this.state.email} 
                  onChangeInput={this.onChangeInput}/>
              <FormInput 
                  name="telefone" 
                  label="Telefone" 
                  type="number" 
                  placeholder="(xx)xxxxx-xxxx" 
                  value={this.state.telefone} 
                  onChangeInput={this.onChangeInput}/>
              <FormInput 
                  name="cpf" 
                  label="CPF" 
                  type="number" 
                  placeholder="000.000.000-00" 
                  value={this.state.cpf} 
                  onChangeInput={this.onChangeInput}/>
            </form>

            <button type="submit">Increver</button>
            
        </div>
      );
    }
}


