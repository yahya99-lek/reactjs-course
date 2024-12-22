import React, { Component } from 'react'
import{NavLink, Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "/compa">Comp A</NavLink>
        <NavLink to = "/compb">Comp B</NavLink>
      </div>
    )
  }
}
