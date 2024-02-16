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
        setLoading(false)
        setErrorMsg(e.message)
      }

    }

    useEffect(()=>{
      if(url!=='') fetchImages(url)
    },[url])
    
  return (
    <div className="image-slider">index</div>
  )
}
