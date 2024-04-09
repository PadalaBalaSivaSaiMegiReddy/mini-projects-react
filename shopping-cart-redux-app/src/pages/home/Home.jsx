import { useEffect, useState } from "react"
import { Circles } from 'react-loader-spinner'
import ProductItem from "../../components/productItem/ProductItem";

export default function Home() {

  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);

  async function fetchListOfProducts(){

    try {
      setLoading(true)
      const res = await fetch('https://fakestoreapi.com/products');
      const data= await res.json();
      if(data){
        setLoading(false);
        setProducts(data);
      }
      
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchListOfProducts();
  },[])

  return (
    <div>
      {loading?<div className="min-h-screen w-full flex justify-center items-center">
        <Circles height={'120'}
        width={'120'} color="rgb(127,29,29)"
        visible={true}
        />
      </div>:null}
      <ProductItem products={products}/>
    </div>
  )
}
