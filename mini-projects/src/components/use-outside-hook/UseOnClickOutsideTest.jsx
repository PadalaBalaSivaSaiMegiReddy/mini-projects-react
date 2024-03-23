import React, { useRef, useState } from 'react'
import useOnClickOutside from './useOnClickOutside';

function UseOnClickOutsideTest() {
  const ref =useRef();
  useOnClickOutside(ref,()=>setShowContent(false))
    const [showContent,setShowContent]=useState(false);
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        {
            showContent?<div ref={ref}>
                <h1 style={{textAlign:"center"}}>This is a random content</h1>
                <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nulla praesentium minus voluptatem debitis officia. Error dignissimos ratione sed cum.</p>
            </div>:<button onClick={()=>setShowContent(true)}>Show Content</button>
        }
    </div>
  )
}

export default UseOnClickOutsideTest