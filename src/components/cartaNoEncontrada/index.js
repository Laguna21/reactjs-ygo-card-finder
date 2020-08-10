import React, { Component } from 'react';
import "./style.css";

class CartaNoEncontrada extends Component {
    render() {
        return (
            <div className="card bg-danger text-center mr-4">
            <h1 className="card-header text-warning">Error</h1>
            <div className="card-body">
            <h3 className="text-warning">La carta <u>{this.props.nombre}</u> no fue encontrada...</h3>
            </div>
            
        
            </div>
        );
    }
}

export default CartaNoEncontrada;