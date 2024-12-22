import axios from 'axios';
import React ,{useState,useEffect} from 'react'

function CompA() {
    const [count, setCount] = useState(0);
    const [posts,setPosts] = useState({});
    const [id,setId] = useState(0);
    useEffect ( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
            setPosts(res.data);
        }).catch(err => {
            console.log(err);
        })
    },[id])
    // https://jsonplaceholder.typicode.com/posts

    
  return (
    <div>
        {/* <button onClick ={() => setCount(count + 1)}>Increase</button>
        {count}
        <button onClick ={() => setCount(count - 1)}>Decreaase</button> */}
        <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
        {posts.title}
        {/* {posts.map(post => <div key={post.id}>{post.id} - {post.title}</div> )} */}
    </div>
  )
}
export default CompA;
