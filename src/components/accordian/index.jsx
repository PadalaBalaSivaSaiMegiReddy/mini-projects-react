import { useState } from "react"
import data from "./data"
import "./styles.css"

export default function Accordian() {
    const [selected,setSelected]=useState(null)
    const [enableMultiSelect,setEnableMultiSelect]=useState(false)
    const [multiple,setMultiple]=useState([])
    const handleSingleSelection=(getCurrentId)=>{
        setSelected(getCurrentId===selected?null:getCurrentId)
    }
    const handleMultiSelection=(getCurrentId)=>{
        let copyMultiple=[...multiple]
        let findIndexOfId=copyMultiple.indexOf(getCurrentId);
        if(findIndexOfId===-1){
            copyMultiple.push(getCurrentId)
        }
        else{
            copyMultiple.splice(findIndexOfId,1)
        }
        setMultiple(copyMultiple)
    }
    console.log(selected,multiple)
  return (
    <div className="wrapper">
        <button onClick={()=>setEnableMultiSelect(!enableMultiSelect)} style={enableMultiSelect?{"background-color":"rgb(61, 187, 61)"}:{"background-color":"rgb(241, 88, 88)"}}>ENABLE MULTI-SELECTION</button>
        
        <div className="accordian">
            {
                data && data.length>0?
                data.map(dataItem=><div className="item" key={Math.random()}>
                    <div className="title" onClick={enableMultiSelect?()=>handleMultiSelection(dataItem.id):()=>handleSingleSelection(dataItem.id)}>
                        <h3>{dataItem.question}</h3>
                        <span >{(selected===dataItem.id ||multiple.includes(dataItem.id))?"-":"+"}</span>
                    </div>
                    {(selected===dataItem.id ||multiple.includes(dataItem.id))?<div>
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
