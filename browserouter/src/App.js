import React, { Component } from 'react';
import CompA from './components/CompA';
import CompB from './components/CompB';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter , Route} from 'react-router-dom'

 export default class App extends Component {
  state = {
    name: 'app comp'

  }
  render() {
    return (
      <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/compa" exact component={CompA} />
      <Route path="/compb" exact component={CompB} />
        {/* <Home /> */}
        {/* <CompA />
        <CompB /> */}
      </BrowserRouter> 
    );
  }
}

