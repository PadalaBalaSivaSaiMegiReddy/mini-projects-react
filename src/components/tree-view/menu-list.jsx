import MenuItem from "./menu-item";
import './styles.css'

export default function MenuList({list=[]}) {
  return (
    <div className='menu-list-container'>
        {
            list&&list.length?
            list.map(listItem=><MenuItem item={listItem}/>)
            :null
        }
    </div>
  )
}
