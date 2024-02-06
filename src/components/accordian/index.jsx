import { useState } from "react"
import data from "./data"

export default function Accordian() {
    [selected,setSelected]=useState(null)
  return (
    <div className="wrapper">
        <div className="accordian">
            {
                data && data.length>0?<>
                data.map(dataItem =><div>
                    </div>)
                </>:<div>No data found!!!</div>
            }
        </div>
    </div>
  )
}
