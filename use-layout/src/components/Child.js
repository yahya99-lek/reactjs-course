import React from 'react'

export default function Child() {


  return (
    <div>
      {/* <h1> Hooks [useLayoutEffect]</h1> */}
      <h1>custom Hooks</h1>
     
     <button onClick ={decrement}>+</button>
     {count}
     <button onClick ={increment}>-</button>
    </div>
  )
}
