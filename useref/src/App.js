import React ,{useRef ,useState, useEffect} from 'react'

export default function App() {
  const [user , setUser] = useState('');
  const [count,setCount] = useState(0);

  const refInput = useRef();
// onchange is used to show what u write in an input 
// useEffect is used to lifecycle it renders in the beginning 
useEffect ( () => { 
  // refInput.current.focus();
  // refInput.current.value = 'writesmtng';
  count.current = count.current + 1;
}, [user]) 
  return (
    <div className="App">
      <h1> Hooks [ userRef] </h1>

      <input ref={refInput} type="text" onChange={(e) => setUser(e.target.value)} />
      {user } <br />
      {count.current}
      

    </div>
  )
}
