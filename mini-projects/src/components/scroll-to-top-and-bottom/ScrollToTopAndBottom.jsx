import { useRef } from "react"
import useFetch from "../use-fetch/UseFetch"

function ScrollToTopAndBottom() {
    const {data,error,pending}=useFetch("https://dummyjson.com/products?limit=100",{})
    const bottomRef=useRef();
    const handleToTop=()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"

        })
    }

    const handleToBottom=()=>{
       bottomRef.current.scrollIntoView({behavior:"smooth"});
    }


    if(pending){
        return <center>
            <h1>Loading please wait!!! </h1>
        </center>
    }
    else if(error){
        return <center>
            <h1>Error occurred please try again</h1>
        </center>
    }
  return (
    <center className='scrollToTopAndBottom'>
        <h1>Scroll To Top And Bottom Feature</h1>
        <h3>This is the top section</h3>
        <button onClick={handleToBottom}>Scroll to bottom</button>
        <ul>
            {
                data&&data.products.length? data.products.map((item)=><li>{item.title}</li>):null
            }
        </ul>
        <h3>This is the bottom section</h3>
        <div ref={bottomRef} className="reference"></div>
        <button onClick={handleToTop}>Scroll to top</button>
        
    </center>
  )
}

export default ScrollToTopAndBottom