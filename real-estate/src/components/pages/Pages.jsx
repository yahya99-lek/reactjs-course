import React from 'react'
import Header from '../common/header/Header'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from '../home/Home';
import Footer from '../common/footer/Footer';
import About from '../about/About';
import Services from '../services/Services';
import Blog from '../blog/Blog';
import Pricing from '../pricing/Pricing';
import Contact from '../contact/Contact';
 
const Pages = () => {
  return (
    <>
    
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/services' component={Services}/>
          <Route exact path='/blog' component={Blog}/>
          <Route exact path='/Pricing' component={Pricing}/>
          <Route exact path='/Contact' component={Contact}/>
        </Switch>
      <Footer />
    </Router>
    </>
  )
}

export default Pages