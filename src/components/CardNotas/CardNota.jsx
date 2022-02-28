import React, { Component } from "react";
import '../../style.css'

class CardNota extends Component {
  render() {
    return (
      <section className="card-note">
        <header>
          <h3>{this.props.titulo}</h3>
        </header>
        <p>{this.props.texto}</p>
      </section>
    );
  }
}

export {CardNota};
