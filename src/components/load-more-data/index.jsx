import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';

export default function LoadMoreData() {
  async function fetchProducts(){
    setLoading(true)
    try{
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`)
      const data = await response.json();
      if(data && data.products&& data.products.length){
        setProducts(data.products)
        setLoading(false);
        console.log(products)
      }
      

    }catch(e){
      console.log(e)
      setLoading(false);
    }
  }


  const [loading,setLoading]=useState(false);
  const[products,setProducts]=useState([]);
  const[count,setCount]=useState(0);
  useEffect(()=>{fetchProducts()},[products])

  if(loading){
    return <div>Loading data. Please wait!!!</div>
  }
  
  return (
    <div className='loadMoreData'>
      LOADMOREDATA
    </div>
  )
}
