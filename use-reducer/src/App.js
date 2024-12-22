import React, { useEffect,useState, useReducer } from 'react';
import Sidebar from './components/Sidebar';
import Item from './components/Item';
import Widget from './components/Widget';


const initState = {
  users: []
}

const reducer = (state,action) => {
  switch(action.type) {
    // case 'add_User': 
    // return {users : [...state.users, 'yahya']}
  
    // case 'remove_User':
    //   return {users: []};
    // default:
    //   return state
    case 'Fetch_Users':
      return {users : action.data}
    case 'Fetch_Err': 
    return {users : [], error:action.data}
    
    default:
      return state;
}
}

// action js obj 
// reducer fct that changes the state depending on the action
// dipatch it allows the action talks the reducer

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  // const [users,setUsers ] = useState([]);
  useEffect(() => { 
     fetch('https://jsonplaceholder.typicode.com/users').then((res) => { 
      return res.json()
     }).then((data) => {
        dispatch({type: 'Fetch_Users', data: data})
     })
     .catch((err) => {
      dispatch({type: 'Fetch_Err', data:'Erro?'})
     })

  },[state.users])
  return (
    <div className="App">
      <h1>Hooks [useReducer]</h1>
      {state.users && <p> {state.error}</p>}
      {state.users.length ? state.users.map(user => <div>{user.name}</div>) : 'there is no users'}
      {/* <button onClick={ () => dispatch({type: 'add_User'})}>Add user</button>
      <button onClick={ () => dispatch({type: 'remove_User'})}>Remove All Users</button> */}
      <Sidebar />
      <Widget />
    </div>
  );
}
