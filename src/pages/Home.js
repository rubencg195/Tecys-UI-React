import React, {Component} from 'react'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';

import MenuList from '../components/MenuList'
import CardTable from '../components/CardTable';
import CardForm from '../components/CardForm';

import { Link } from 'react-router'
class Home extends Component {
  navigate(){
    this.history.replacecState(null,"/");
  }
  render() {
    return (
      <div>
        <Drawer docked={true} width ={250} >
          <MenuList/>
        </Drawer>
        <div style={{"margin-left":"250"}}>
          <AppBar
            title="Title"
            iconElementRight={<FlatButton label="Save" />}
          />
          <CardForm/>
          <CardTable/>
        </div>
      </div>
    );
  }
}


export default Home;
