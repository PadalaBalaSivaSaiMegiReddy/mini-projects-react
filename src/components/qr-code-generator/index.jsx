import QRCode from 'react-qr-code'
import './styles.css'
import { useState } from 'react'

export default function QRCodeGenerator() {
    const [qrCode,setQrCode]=useState('');
    const [input,setInput]=useState('');

    function handleClick(){
        setQrCode(input);
        setInput('');
    }
    
  return (
    <div className='qr-code-generator'>
        <h1>QRCodeGenerator</h1>
    <div className='inner-div'>
        <input value={input} onChange={e=>setInput(e.target.value)} type='text' name="qr-code" placeholder='Enter your value here...'/>
        <button disabled={input&&input.trim()!==''?false:true} onClick={handleClick}>Generate</button>
        <div>

            <QRCode id='qr-code-value' value={qrCode} size={400} bgColor='#fff'/>
        </div>

    </div>
    </div>
  )
}
