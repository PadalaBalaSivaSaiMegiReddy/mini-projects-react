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
  useEffect(()=>{fetchProducts()},[])

  
return(
  <div className='loadMoreData'>
  {loading?
     (<div>Loading data. Please wait!!!</div>):
   (
    <>
    {
      products.map((item)=>
      <div key={item.id} className='product-container'>
        {products&&products.length?<div className='product'><img src={item.thumbnail} alt={item.title}/>  
        <p>{item.title}</p></div>:null  }
          </div>)
    }
    </>
  )
}</div>)

}
