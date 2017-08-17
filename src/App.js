import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MenuList from './components/MenuList'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ViewList from 'material-ui/svg-icons/action/view-list';
import SettingsBtn from 'material-ui/svg-icons/action/settings';
import {Link} from 'react-router-dom';

import {black500, blue500, lightGreen500} from 'material-ui/styles/colors';

import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home';
import Sap from './pages/Sap';
import About from './pages/About';
import Agent from './pages/Agent';
import Region from './pages/Region';
import Warehouse from './pages/Warehouse';
import Settings from './pages/Settings';


const styles = {
   title: {
     cursor: 'pointer',
   },
}

function handleTouchTap() {
   alert('onTouchTap triggered on the title component');
}

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        showDrawer: true,
        mainMarginLeft : 250,
      };
  };
  toogleDrawer = (event, showDrawer) => {
    this.setState({ showDrawer: !this.state.showDrawer, mainMarginLeft : this.state.showDrawer ? 0 : 250,  });
  };
  render() {

    return (
      <MuiThemeProvider>
        <div className="App">
          <header>
            <Drawer docked={this.state.showDrawer} width ={250}  >
              <img src="./images/logo.png" width={250}/>
              <img src="./images/logo2.png" width={250}/>
              <MenuList/>
            </Drawer>
          </header>
          <main>
            <div style={{marginLeft:this.state.mainMarginLeft}}>
              <AppBar
                title={<span style={styles.title}>TECSYS IMPORTACIONES</span>}
                onTitleTouchTap={handleTouchTap}
                iconElementLeft={<IconButton onClick={this.toogleDrawer} ><ViewList /></IconButton>}
                iconElementRight={<IconButton containerElement={<Link to="configuracion" />}><SettingsBtn /></IconButton>}
                style={{backgroundColor: lightGreen500}}
              />
              <Switch>
               <Route exact path='/' component={Home} />
               <Route path='/sap' component={Sap} />
               <Route path='/agente' component={Agent} />
               <Route path='/region' component={Region} />
               <Route path='/bodega' component={Warehouse} />
               <Route path='/informacion' component={About} />
               <Route path='/configuracion' component={Settings} />
              </Switch>
            </div>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
