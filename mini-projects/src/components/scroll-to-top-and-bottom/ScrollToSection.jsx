import { useRef } from "react"

function ScrollToSection() {

    const reference =useRef();

    const handleScrollToSection=()=>{
        let pos = reference.current.getBoundingClientRect().top
        window.scrollTo({
            top:pos,
            behavior:"smooth"
        })
    }

    const data=[
        {
            label:'First Card',
            style:{
                width:'100%',
                height:'600px',
                background:'red',

            }
        },
        {
            label:'Second Card',
            style:{
                width:'100%',
                height:'600px',
                background:'yellow',

            }
        },
        {
            label:'Third Card',
            style:{
                width:'100%',
                height:'600px',
                background:'blue',

            }
        },
        {
            label:'Fourth Card',
            style:{
                width:'100%',
                height:'600px',
                background:'orange',

            }
        },
        {
            label:'Fifth Card',
            style:{
                width:'100%',
                height:'600px',
                background:'pink',

            }
        },
    ]
  return (
    <div>
        <h1>Scroll to a particular section</h1>
        <button onClick={handleScrollToSection}>Click To Scroll</button>
        {
            data.map((dataItem,index)=><div key={index} ref={index===3?reference:null}>
                <h3 style={dataItem.style}>{dataItem.label}</h3>
            </div>)
        }
    </div>
  )
}

export default ScrollToSection