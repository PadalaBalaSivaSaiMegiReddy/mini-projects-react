import React from 'react'
import useFetch from './UseFetch'

function UseFetchHookTest() {
    const {data,error,pending}=useFetch("https://dummyjson.com/products",{})
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1>
        UseFetchHookTest
        </h1>
        {
            pending && <h3>Loading...</h3>
        }

        {
            error && <h3>{error}</h3>
        }

        {
            data && data.products.map((item,index)=>{
                return <p key={index}>{item.title}</p>
            })
        }

        </div>
  )
}

export default UseFetchHookTest