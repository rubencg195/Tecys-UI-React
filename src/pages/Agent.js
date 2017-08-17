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
            {type:"select", value: "Proveedor"},
            {type:"text", value: "Minimo"},
            {type:"text", value: "Tarifa por CFT 111 a 950"},
            {type:"text", value: "Tarifa por CFT mas de 950"}
         ],
         secondForm:
         [
            {type:"text", value: "Contenedor 20 STD"},
            {type:"text", value: "Contenedor40 STD"},
            {type:"text", value: "Contenedor40 HC"},
            {type:"text", value: "Contenedor45 HC"},
            {type:"text", value: "Contenedor 45 120"}
         ],
         thirdForm:
         [
            {type:"text", value: "Nombre"},
            {type:"text", value: "Descripcion"},
            {type:"text", value: "Cantidad"},
            {type:"text", value: "Costo"}
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
