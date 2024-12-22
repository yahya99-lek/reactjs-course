import React, { useContext } from 'react';
import {ProductContext} from '../App'


export default function Item() {
    const vl = useContext(ProductContext);
  return (
    <div className="Item">
        wfwefwe <br/>
       {vl}
    </div>
  )
}
