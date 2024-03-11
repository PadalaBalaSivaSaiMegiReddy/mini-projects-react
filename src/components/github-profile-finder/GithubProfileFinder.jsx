import { useEffect, useState } from 'react'
import './GithubProfileFinder.css'

function GithubProfileFinder() {
    const [userName,setUserName]=useState("PadalaBalaSivaSaiMegiReddy");
    const [userData,setUserData]=useState(null);
    const [loading,setLoading]=useState(false)




    const fetchGithubUserData=async()=>{
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data= await response.json()
        console.log(data)
        if(data){
            setUserData(data);
        }

    }

    const handleSubmit=()=>{
        // useEffect(()=>{
        //     fetchGithubUserData()
        // },[])
        fetchGithubUserData();
    }
    useEffect(() => {
        fetchGithubUserData();
      }, []);
    
  return (
    <div className='githubProfileContainer'>
        <div className="inputWrapper">
            <input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" placeholder='Type github username...' />
        </div>
        <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default GithubProfileFinder