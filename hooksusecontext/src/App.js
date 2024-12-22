import React, { useState,createContext } from 'react';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';

export const ProductContext = createContext();

export default function () {
     const [product, setProduct] = useState('Laptop');

  return (
    <ProductContext.Provider value={product}>
      <div>  
        <h1>Hooks [ useContext ] </h1>
        <Sidebar />
        <Widget />
      </div>
    </ProductContext.Provider>
  )
}
