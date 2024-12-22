import React, {useState ,useCallback} from 'react'
import Child from './components/Child'
export default function App() {

  const [count,setCount] = useState(0);
  const updateCount = useCallback(() => setCount(count+ 1),[count]);
  
  const [user,setUser] = useState("");
  return (
    <div className="App">
      <h1> Hooks [UseMemo - UseCallback]</h1>
      {count}
      <button onClick={() => setCount(count+1)}> Increment</button>
      <input type="text" onChange={(e) => setUser(e.target.value)} />

      <Child count={count} updateCount ={updateCount}/>
    </div>
  )
}
