import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var Datastore = require('nedb')
  , db = new Datastore({ filename: './db', autoload: true });

import Home from './pages/Home'

class App extends Component {
  navigate(){
    this.history.replaceState(null,"/");
  }
  render() {
    console.log(this.props);
    return (
      <MuiThemeProvider>
        <div className="App">
            <Home></Home>
            {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
