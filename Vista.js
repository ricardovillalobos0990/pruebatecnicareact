import React, { Component } from 'react'

export default class vista extends Component {

    /* 
    Con la funcion busqueda.ref se lograria leer los datos del formulario y enviarlos como
    arumentos en una funcion
    */
    render() {
        return (
            <React.Fragment>
            <div style={{background:"red"}}>
                <img href="#" src=""></img>
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
            </div>
            </React.Fragment>
        )
    }
}
