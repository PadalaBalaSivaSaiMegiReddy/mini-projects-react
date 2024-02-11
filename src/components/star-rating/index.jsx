import { useState } from 'react'
import './styles.css'

import {FaStar} from 'react-icons/fa'

export default function StarRating({noOfStars=5}) {
  const [rating,SetRating]=useState(0);
  const [hover,setHover]=useState(0);
  function handleClick(getCurrentIndex){
    SetRating(getCurrentIndex)

  }
  function handleMouseEnter(getCurrentIndex){
    setHover(getCurrentIndex)


  }

  function handleMouseExit(){
    setHover(rating)


  }
  return (
    <div className='starRating'>
      {
        [...Array(noOfStars)].map((_,index)=>{
          index+=1;
          return <FaStar className={index<=(hover||rating)?"active":"inactive"} key={index} onClick={()=>handleClick(index)} onMouseMove={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseExit(index)} size={40} />
        })

      }
    </div>
  )
}
