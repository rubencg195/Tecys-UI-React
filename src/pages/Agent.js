import React, {Component} from 'react'

import CardTable from '../components/CardTable';
import CardForm from '../components/CardForm';

import { Link } from 'react-router';

class Agent extends Component {
  constructor() {
      super();
      this.state = {
         firstForm:
         [
            "Proveedor", "Minimo", "Tarifa por CFT 111 a 950",  "Tarifa por CFT mas de 950"
         ],
         secondForm:
         [
            "Contenedor 20 STD", "Contenedor40 STD", "Contenedor40 HC", "Contenedor45 HC", "Contenedor 45 120"
         ],
         thirdForm:
         [
            "Nombre", "Descripcion", "Cantidad", "Costo"
         ],
      }
  }
  render() {
    return (
      <div>
        <CardTable
          title={"Gastons en Origen"}
          subtitle={"Ingrese un los valores siguientes"}
          text=""
          questions={this.state.firstForm}
        />
        <CardTable
          title={"Gastos en Destino"}
          subtitle={"Ingrese los valores siguintes"}
          text=""
          questions={this.state.secondForm}
        />
        <CardTable
          title={"Agente Aduanero"}
          subtitle={"Ingrese los valores siguintes"}
          text=""
          questions={this.state.secondForm}
        />
        <CardTable
          title={"OPC"}
          subtitle={"Ingrese los valores siguintes"}
          text=""
          questions={this.state.secondForm}
        />
      </div>
    );
  }
}


export default Agent;
