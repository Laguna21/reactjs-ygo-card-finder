import React, { Component } from 'react';
import "./style.css";
class Carta extends Component {
    borrar = ()=>{
        this.props.borrarCarta(this.props.info);
    }
    mostrarAtk = () =>{
        return (this.props.info.type.includes("Monster") )?
        (<h4 className="card-text mt-1">Atk: {this.props.info.atk}  Def: {this.props.info.def}</h4>):
        (<h4 className="card-text mt-1">{this.props.info.race}</h4>);
    }
    render() {
        return (
            <div>
            <div className="card border-secondary  text-center">
        <h2 className="card-header container">{this.props.info.name}</h2>
          <div className="card-body">
          <img src={this.props.info.card_images[0].image_url} alt="img"/>
        <h4 className="card-text mt-1 mb-1">{this.props.info.type}</h4>
        {this.mostrarAtk()}
        
        
        <hr className="my-4"/>
        <h4 className="card-text">Precio: {this.props.info.card_prices[0].amazon_price} $</h4>
                    </div>
                    <p className="card-footer">
                    <button className="btn btn-danger" onClick={this.borrar}>
                        BORRAR
                    </button>
                    </p>
                </div>     
            </div>
        );
    }
}

export default Carta;