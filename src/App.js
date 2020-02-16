import React from 'react';
import './App.css';
import FormInput from './components/forminput.jsx';

class App extends React.Component {
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

  onChangeInput = (name, value) => {
      this.setState({ [name]: value })
  };

  render() {

      return (
        <div className="App">
          <h2>Cadastro de alunas</h2>
            <form>
              <FormInput name="nome" label="Nome" type="text" value={this.state.nome} onChangeInput={this.onChangeInput}/>
              <FormInput name="cidade" label="Cidade" type="text" value={this.state.cidade} onChangeInput={this.onChangeInput}/>
              <FormInput name="email" label="Email" type="email" placeholder="email@email.com" value={this.state.email} onChangeInput={this.onChangeInput}/>
              <FormInput name="telefone" label="Telefone" type="number" placeholder="(xx)xxxxx-xxxx" value={this.state.telefone} onChangeInput={this.onChangeInput}/>
              <FormInput name="cpf" label="CPF" type="number" placeholder="000.000.000-00" value={this.state.cpf} onChangeInput={this.onChangeInput}/>
            </form>

            <button>Inscrever</button>
            
        </div>
      );
    }
}

export default App;
