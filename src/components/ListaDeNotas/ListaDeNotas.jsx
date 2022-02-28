import React, { Component } from "react";
import { CardNota } from "../CardNotas/CardNota";
import '../../style.css'

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="note-list-right">
        {this.props.notes.map((note, index) => {
          return (
            <li key={index}>
              <CardNota titulo={note.titulo} texto={note.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export { ListaDeNotas };
