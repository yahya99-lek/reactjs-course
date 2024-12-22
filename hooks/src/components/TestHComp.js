import React , {useState , useEffect}  from 'react'

export default function TestHComp({x,y}) {
    const [products,setProducts] = useState(
        [
            {id:1,name:'HP'},
            {id:2,name:'DELL'}
        ]
    );
    const [vl,setVl] = useState('');
    const [name,setName] = useState('test');

   const addOneItem = () => { 
    setProducts([...products , {id:3,name:'MAC'}])
   }
   useEffect(() => {
    console.log("this is useEffect");
   }, [name],vl);
  return (
    <div>
        <input type="text" onChange={(e) =>setVl(e.target.value)}/>
        {/* <button onClick={() => setProduct('Mouse')}>change</button> */}
        <button onClick={ addOneItem}>AddItem</button>
        {products.map((product) => <span key={product.id}>{product.name} </span>)}
    </div>
  )
}
