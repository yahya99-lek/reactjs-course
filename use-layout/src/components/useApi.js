import React ,{useState,useEffect} from 'react'
import axios from 'axios'

export const useApi = (url) => {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(null);
    const [err,setErr] = useState(null);
    useEffect(() => {
        setLoading(true);
        axios.get(url).then(data => {
          setLoading(false);
          console.log(data.data);
        })
        .catch(err => {
          setLoading(false);
          setErr("something went wrong");
        })
      },[])

      return [data,loading,err];
}