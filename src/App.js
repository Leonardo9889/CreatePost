import React, { Component } from "react";
import { FormularioCadastro } from "./components/FormularioCadastro/FormularioCadastro";
import { ListaDeNotas } from "./components/ListaDeNotas/ListaDeNotas";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  createCard(titulo, texto) {
    if ((!titulo, !texto)) {
      alert(`Os campos titulo e texto são obrigatórios`)
    } else {
      const newNote = { titulo, texto };
      const newArrayNotes = [...this.state.notes, newNote];
      const newState = { notes: newArrayNotes };
      this.setState(newState);
    }
  }

  render() {
    return (
      <section className="page">
        <FormularioCadastro createCard={this.createCard.bind(this)} />
        <ListaDeNotas notes={this.state.notes} />
      </section>
    );
  }
}

export default App;
