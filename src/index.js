import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Home from './pages/Home';
import About from './pages/About';

 console.log(Router);
 console.log(Route);
 console.log(IndexRoute);
 console.log(hashHistory);


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home}></IndexRoute>
      <Route path='about' name='about' component={About} ></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
