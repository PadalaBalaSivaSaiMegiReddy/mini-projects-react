import { useState } from 'react'
import Modal from './Modal'

function ModalTest() {
    const [showModalPopup,setShowModalPopup]=useState(false)
    const handleToggleModalPopup=()=>{
        setShowModalPopup(!showModalPopup)
    }
    const onClose=()=>{
      setShowModalPopup(false)
    }
  return (
    <div className='modal-test-container' style={{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"}}>
        
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {showModalPopup&&<Modal header={<h3>Custom Header</h3>} footer={<h3>Custom Footer</h3>} body={<div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum facilis, praesentium ut quaerat nemo perferendis perspiciatis animi autem illum? Quisquam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quaerat magni tempore expedita nulla eius eveniet provident error possimus architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt voluptatem aliquid ad quam vitae odio labore laudantium voluptatibus facere.</div>} onClose={onClose}/>}
    </div>
  )
}

export default ModalTest