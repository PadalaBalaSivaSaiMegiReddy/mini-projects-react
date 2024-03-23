import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"
import "./styles.css"
export default function ImageSlider({url,limit=5,page=1}) {
    const [images,setImages]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0);
    const [errorMsg,setErrorMsg]=useState(null);
    const [loading,setLoading]=useState(false)

    function handlePrevious(){
      setCurrentSlide( currentSlide===0?images.length-1:currentSlide-1)
    }

    function handleNext(){
      setCurrentSlide( currentSlide===images.length-1?0:currentSlide+1)
    }


    const fetchImages=async(getUrl)=>{
      try{
        setLoading(true)
        const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
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

    console.log(images)

    if(loading){
      return <div>Loading Data!!! Please Wait</div>
    }

    if(errorMsg!==null){
      return <div>Error occurred {errorMsg}</div>
    }
    
  return (
    <div className="page">
    <div className="image-slider">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
      {
        images && images.length? images.map((imageItem,index)=>{
          return(<img
          src={imageItem.download_url}
          key ={imageItem.id}
          alt={imageItem.download_url}
          className={currentSlide===index?"current-image":"current-image hide-current-image"}

          />)
        }):null
      }
      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
      <span className="circle-indicators">
        {
          images && images.length?images.map((_,index)=>(<button onClick={()=>setCurrentSlide(index)} key={index} className={currentSlide===index?"current-indicator":"current-indicator hide-current-indicator"}></button>)):null
        }
      </span>
    </div>
    </div>
  )
}
