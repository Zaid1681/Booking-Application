// import React , {useEffect , useState} from 'react'

// function UseFetch(url) {
//     const[data,setData]  = useState([]);
//     const[loading,setLoading]  = useState(false);
//     const[error,setError]  = useState(false);
//     useEffect((url)=>{
//         const fetchData= async()=>{
//             setLoading(true)
//             try {
//                 const res = axios.get(url)
//                 setData(res.data)

//             } catch (error) {
//                 setError(error)

//             }
//             setLoading(false)

//         }

//         fetchData();
//     } , [url])

//     const reFetch= async()=>{
//         setLoading(true)
//         try {
//             const res = axios.get(url)
//             setData(res.data)

//         } catch (error) {
//             setError(error)

//         }
//         setLoading(false)

//     }

//   return {data , loading , error , reFetch}
// }

// export default UseFetch

import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  let mainurl = "https://bookingappbackend.onrender.com" + url;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(mainurl);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(mainurl);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
