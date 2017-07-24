import React, {Component} from 'react'

import CardTable from '../components/CardTable';
import CardForm from '../components/CardForm';

import { Link } from 'react-router';

class Home extends Component {
  constructor() {
      super();
      this.state = {
         firstForm:
         [
            "Region", "Medio de Transporte", "Agente Aduanero", "Bodega Fiscal", "Dias de Retencion", "Gastos Administrativos"
         ],
         secondForm:
         [
            "Codigo", "Cantidad", "Volumen", "Medida"
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
        <CardForm
          title={"Configuraciones Principales"}
          subtitle={"Ingrese los campos indicados"}
          text=""
          questions={this.state.firstForm}
        />
        <CardTable
          title={"Calculo de Importaciones"}
          subtitle={"Ingrese un nuevo producto"}
          text=""
          questions={this.state.secondForm}
        />
        <CardTable
          title={"Otros Gastos"}
          subtitle={"Ingrese un nuevo gasto"}
          text=""
          questions={this.state.thirdForm}
        />
      </div>
    );
  }
}


export default Home;
