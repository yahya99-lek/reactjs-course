import React, {useState} from 'react';

export const useCount = (initval) => {
const [count, setCount] = useState(initval);

const increment = () => setCount(count+1);
const decrement = () => setCount(count-1);

return [count, increment, decrement]
}