import React from 'react'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
const App = () => {
  return (
    <>
      <Route>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
           
        </Switch>
      </Route>
    </>
  )
}

export default App