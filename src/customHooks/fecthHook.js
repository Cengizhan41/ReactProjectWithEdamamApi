import { useState } from "react";


function fetchHook(){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false)

    async function getFromEdamam(url){
        const res = await fetch(url);
        const jsonData = await res.json();
        setData(jsonData);
        setLoading(false);
        // console.log(res.ok)
        if(!res.ok){
            setError(true)
        }
        
    }

    return[getFromEdamam,data,loading,error]
}

export default fetchHook