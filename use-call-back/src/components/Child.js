import React,{memo,useMemo} from 'react'

 function Child(props) {

    console.log("child render");

    
    const output = useMemo(() => { 
        let put =0;
         for (let i = 0; i <= 20000000;i++){
         put++;
        }
        return put
    })
  return (
    <div> 
        Child component {output} - {props.count}

        <br />
        <button onClick={() => props.updateCount()}>Update</button>
    </div>
  )
}
export default memo(Child)
