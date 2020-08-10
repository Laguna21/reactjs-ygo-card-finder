import React, { Component } from "react";
import "./style.css";

export default class Formulario extends Component {
  buscarNombre = () => {
    const nom = document.querySelector("#nombreBuscar").value;

    this.props.cambiarNombre(nom);
  };
  limpiarLista = () => {
    this.props.limpiarLista();
  };
  render() {
    return (
      <div>
        <div className="card bg-secondary mb-3">
          <h1 className="card-header">BUSCAR CARTA</h1>
          <div className="card-body">
            <div className="form-group">
              <label className="col-form-label card-title" htmlFor="nombre">
                Nombre de carta
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="black dragon"
                id="nombreBuscar"
              ></input>
            </div>
          </div>
          <p className="card-footer">
            <button className="btn btn-info mr-3" onClick={this.buscarNombre}>
              BUSCAR!
            </button>
            <button
              className="btn btn-warning ml-3"
              onClick={this.limpiarLista}
            >
              LIMPIAR LISTA
            </button>
          </p>
        </div>
      </div>
    );
  }
}
