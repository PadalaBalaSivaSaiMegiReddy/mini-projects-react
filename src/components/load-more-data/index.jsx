import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';

export default function LoadMoreData() {
  async function fetchProducts(){
    setLoading(true)
    try{
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*10}`)
      const data = await response.json();
      setLoading(false);
      setProducts(data)

    }catch(e){
      console.log(e)
      setLoading(false);
    }
  }


  const [loading,setLoading]=useState(false);
  const[products,setProducts]=useState([]);
  const[count,setCount]=useState(0);
  useEffect(()=>{fetchProducts()},[])
  console.log(products)

  return (
    <div className='loadMoreData'>LoadMoreData</div>
  )
}
