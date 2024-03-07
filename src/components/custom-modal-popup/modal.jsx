import './modal.css'

function Modal({id,header,body,footer}) {
  return (
    <div id={id||'Modal'} className='modal'>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} className="modal-content">
            <div className="header">
                <span className='close-modal-icon'>&times;</span>
                <h2>{header?header:"Header"}</h2>
            </div>
            <div className="body"></div>
            {body?body:<div>
                <p>This is our Modal Body.</p>
                </div>}
            <div className="footer">
                {footer?footer:<h2>Footer</h2>}
            </div>
        </div>
    </div>
  )
}

export default Modal