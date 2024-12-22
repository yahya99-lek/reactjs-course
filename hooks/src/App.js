import React, { useState } from 'react'


const App = () => {
  const [index,setindex] = useState(1);
  setindex(2)
  return (
    <div>
      {index}
    </div>
  )
}

export default App