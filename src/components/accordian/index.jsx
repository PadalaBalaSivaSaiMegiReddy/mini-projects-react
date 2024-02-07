import { useState } from "react"
import data from "./data"
import "./styles.css"

export default function Accordian() {
    const [selected,setSelected]=useState(null)
    const handleSingleSelection=(getCurrentId)=>{
        setSelected(getCurrentId===selected?null:getCurrentId)
    }


  return (
    <div className="wrapper">
        <div className="accordian">
            {
                data && data.length>0?
                data.map(dataItem=><div className="item" key={Math.random()}>
                    <div className="title" onClick={()=>handleSingleSelection(dataItem.id)}>
                        <h3>{dataItem.question}</h3>
                        <span >+</span>
                    </div>
                    {selected===dataItem.id?<div>
                    <div className="content">{dataItem.answer}</div>
                </div>:null}
                </div>
                
                )
                :<div>No data found!!!</div>
                
                    
            }
        </div>
    </div>
  )
}
