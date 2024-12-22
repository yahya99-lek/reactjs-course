import React from 'react';
import Item from './Item'

export default function Sidebar(props) {
  return (
    <div className="Sidebar">
        <p> Sidebar </p>
        <Item product={props.product}/>
    </div>
  )
}
