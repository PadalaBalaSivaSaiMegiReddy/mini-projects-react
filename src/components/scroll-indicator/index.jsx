import { useEffect, useState } from 'react';
import './styles.css';

export default function ScrollIndicator({url}) {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [errorMsg,setErrorMsg]=useState('');
    const [scrollPercentage,setScrollPercentage]=useState(0)

    async function getData(getUrl){
        setLoading(true)
        try {
        const res=await fetch(getUrl);
        const resData=await res.json();
        if(resData&&resData.products&&resData.products.length>0){

            setData(resData.products)
            setLoading(false)
        }
            
        } catch (error) {
            setErrorMsg(error.message)
            setLoading(false)
        }
        
    }
    useEffect(()=>{
        getData(url)
    },[url])
    console.log(data)
  return (
    <div className='scroll-indicator-page'>
        <h1>Custom Scroll Indicator</h1>
        <div className="data-container">
            {data&&data.length>0?
            data.map((dataItem)=><p>{dataItem.title}</p>)
            :null}
        </div>
    </div>
  )
}
