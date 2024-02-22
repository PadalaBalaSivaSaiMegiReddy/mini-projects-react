import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({item}) {
  const [displyCurrentChildren,setDisplyCurrentChildren]=useState({})
  return (
    <div className='menu-item-container'>
        <li>
          <div>
            <p>{item.label}</p>
            {item && item.children && item.children.length?<span>+</span>:null}

          </div>
            {
                item&&item.children &&item.children.length>0?
                <MenuList list={item.children}/>
                :null
            }
        </li>
    </div>
  )
}
