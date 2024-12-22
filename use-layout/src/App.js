import React,{useEffect, useState} from 'react'
import {useCount} from './components/cuctomHook'
import {useApi} from './components/useApi'
import axios from 'axios'
// import {useLog} from './components/UseLog';
export default function App() { 

  // const [user, setUser] = useState('');
  // const inputRef = useRef("");

  // useLayoutEffect (() => {
  //   console.log(inputRef.current.value);
  // },[])

  // useEffect (() => {
  //   inputRef.current.value = "zaki";
  //   // console.log("useEffect");
  //   console.log(inputRef.current.value);
  // },[])
  // useEffect happens after the render after the divs appears in the dom

// ******************  Custom hooks ***************

// const [count,increment,decrement] = useCount(0);

const [users,loading,err]=useApi('https://jsonplaceholder.typicode.com/users')



  return (
    <div>
      {/* <h1> Hooks [useLayoutEffect]</h1> */}
      <h1>custom Hooks</h1>
      {loading  && <p>Loading...</p>}
      {users && console.log(users)}
      {err && <p>{err}</p>}
     {/* <button onClick ={increment}>+</button>
     {count}
     <button onClick ={decrement}>-</button> */}
    </div>
  )
}
