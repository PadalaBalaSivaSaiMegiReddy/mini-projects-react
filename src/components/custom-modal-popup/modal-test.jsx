import { useState } from 'react'
import Modal from './Modal'

function ModalTest() {
    const [showModalPopup,setShowModalPopup]=useState(false)
    const handleToggleModalPopup=()=>{
        setShowModalPopup(!showModalPopup)
    }
  return (
    <div className='modal-test-container' style={{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"}}>
        
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {showModalPopup&&<Modal/>}
    </div>
  )
}

export default ModalTest