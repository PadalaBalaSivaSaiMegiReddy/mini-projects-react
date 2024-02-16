import { useEffect, useState } from "react"
import "./styles.css"
export default function ImageSlider({url,limit}) {
    const [images,setImages]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0);
    const [errorMsg,setErrorMsg]=useState(null);
    const [loading,setLoading]=useState(false)

    const fetchImages=async(getUrl)=>{
      try{
        setLoading(true)
        const response = await fetch(getUrl);
        const data = await response.json()

        if(data){
          setImages(data)
          setLoading(false)
        }

      }catch(e){
        setErrorMsg(e.message)
        setLoading(false)
      }

    }

    useEffect(()=>{
      if(url!=='') fetchImages(url)
    },[url])

    if(loading){
      return <div>Loading Data!!! Please Wait</div>
    }

    if(errorMsg!==null){
      return <div>Error occurred {errorMsg}</div>
    }
    
  return (
    <div className="image-slider">index</div>
  )
}
