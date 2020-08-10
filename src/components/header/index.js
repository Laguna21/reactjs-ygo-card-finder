import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
               <header className="jumbotron ">
               <h1 className="display-3">YGO CARD FINDER</h1>
               <p className="lead">Buscador de cartas oficial</p>
                 <hr className="my-4"></hr>
                 <p className="text-right">Busque y obtenga las mejores cartas, al mejor precio...</p>
                </header> 
            </div>
        )
    }
}
