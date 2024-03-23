import React, { useEffect } from 'react'
import { useState } from 'react'

function useFetch(url,options={}) {
    const [data,setData]=useState(null);
    const [pending,setPending]=useState(false);
    const [error,setError]=useState(null);

    async function fetchData(){
        setPending(true);
        try {
            const response=await fetch(url,{...options});
            if(!response.ok) throw new Error(response.statusText)

            const result = await response.json();
            setData(result);
            setPending(false);
            setError(null);

            
        } catch (error) {
            setError(`${error}. Some error occurred.`)
            setPending(false)
            
        }
    }

    useEffect(()=>{

        fetchData();
    
    },[url]);

    return {data,error,pending}

}


export default useFetch