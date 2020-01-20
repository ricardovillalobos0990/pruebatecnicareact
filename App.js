import React, { Component} from 'react';
import './App.css';
import Vista from './Vista'
import { archivo } from './archivo.json';

class App extends Component {
  constructor(){
  super();
  this.state = {
    archivo: archivo
  }
}

/* 
Se crearia la funcion busqueda para
enviarla como propiedad a la vista la cual toma 
el argumento y se ejecuta cada vez que se ejecuta un evento de onchange
*/

  render(){
  /* Se lee un archivo en formato Json */
  const arch = this.state.archivo.map((archive, i) => {
    return (
        <div style={{background: "blue"}}>
              <img href="#" src=""></img>
              <p>{archive.title}</p>
              <p>{archive.description}</p>
         </div>      
    )
  })
  
  return (
    <div className="App">
      {/* Se muestra los datos de las 3 seciones */}
      {arch}
      {/* Se muestra una segunda vista de un formulario */}
      <Vista title="Pagina 2" description="Esto es un componente" />
    </div>
  );
}


}

export default App;