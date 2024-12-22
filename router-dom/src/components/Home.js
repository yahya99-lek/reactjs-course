import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function Home() {
    const route = useNavigate()
  return (
    <div>
        Home
        <button onClick={() => route('contact')}>Add User</button>
    </div>
  )
}
