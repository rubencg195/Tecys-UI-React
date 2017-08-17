import React, {Component} from 'react'

import CardTable from '../components/CardTable';
import CardForm from '../components/CardForm';

import { Link } from 'react-router';

import DB from "../db/ConfigDB"

class Home extends Component {
  loadQuestions(){

  }
  constructor() {
      super();
      console.log("DB ", DB, DB.init());
      this.state = {

      }
  }
  render() {
    return (
      <div>
        <CardForm
          title={"Configuraciones Principales"}
          subtitle={"Ingrese los campos indicados"}
          text=""
          db={DB}
          category = "main_config"
        />
        <CardTable
          title={"Calculo de Importaciones"}
          subtitle={"Ingrese un nuevo producto"}
          text=""
          db={DB}
          category = "main_config"
        />
        <CardTable
          title={"Calculo de Importaciones"}
          subtitle={"Ingrese un nuevo producto"}
          text=""
          db={DB}
          category = "main_result"
        />
        <CardTable
          title={"Otros Gastos"}
          subtitle={"Ingrese un nuevo gasto"}
          text=""
          db={DB}
          category = "main_add_item"
        />
      </div>
    );
  }
}


export default Home;
