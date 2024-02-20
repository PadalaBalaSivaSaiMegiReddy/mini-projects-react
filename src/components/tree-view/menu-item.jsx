import MenuList from "./menu-list";

export default function MenuItem({item}) {
  return (
    <div className='menu-item-container'>
        <li>
            <p>{item.label}</p>
            {
                item&&item.children &&item.children.length>0?
                <MenuList list={item.children}/>
                :null
            }
        </li>
    </div>
  )
}
