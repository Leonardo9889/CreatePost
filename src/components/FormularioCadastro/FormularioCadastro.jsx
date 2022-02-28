import React, { Component } from "react";
import "../../style.css";

class FormularioCadastro extends Component {

  constructor(props){
    super(props)
    this.titulo = "";
    this.texto = "";
  }

  _alterTitle(event){
    this.title = event.target.value;
  }

  _alterText(event){
    this.texto = event.target.value;
  }

  _createCard(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.title, this.texto);
  }

  render() {
    return (
      <div className="data-form-left">
        <form onSubmit={this._createCard.bind(this)}>
          <input onChange={this._alterTitle.bind(this)} type="text" placeholder="Titulo" />
          <textarea onChange={this._alterText.bind(this)} placeholder="Escreva sua nota..."></textarea>
          <button>Criar nota</button>
        </form>
      </div>
    );
  }
}

export { FormularioCadastro };
