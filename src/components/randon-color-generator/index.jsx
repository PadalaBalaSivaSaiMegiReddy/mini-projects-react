import { useState } from "react"
import "./styles.css"

export default function RandomColorGenerator() {

  const[typeOfColorFormat,setTypeOfColorFormat]=useState('hex')
  const[color,setColor]=useState(`#000000`)

  function randomColorUtility(len){
    return Math.floor(Math.random()*len)
  }


  const handleHexColorGenerator=()=>{
    const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexColor='#'

    for(let i=0;i<6;i++){
      hexColor+=hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor)
  }
  const handleRBGColorGenerator=()=>{
    let r=randomColorUtility(256)
    let g=randomColorUtility(256)
    let b=randomColorUtility(256)
    let rgbColor=`rgb(${r},${g},${b})`
    setColor(rgbColor)



  }
  return (
    <div className="RandomColorGenerator" style={{background:color}}>
        <div className="topBtnsBar">
        <button onClick={()=>setTypeOfColorFormat('hex')}>Create HEX color</button>       
             <button onClick={()=>setTypeOfColorFormat('rgb')}>Create RGB color</button>
             <button onClick={typeOfColorFormat==='hex'?handleHexColorGenerator:handleRBGColorGenerator}>Generate Random color</button>
        </div>

        <div className="colorsContainer">
          <h3>{typeOfColorFormat==="hex"?"HEX Color":"RGB Color"}</h3>
          <h1>{color}</h1>
        </div>
    </div>
  )
}
