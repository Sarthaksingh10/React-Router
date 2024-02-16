
/* import {useState,useEffect} from "react"*/
import {useLoaderData} from "react-router-dom"
function Github() {
    const state = useLoaderData();
  /*   const [state,setstate]=useState({})
    useEffect(() => {
        fetch("https://api.github.com/users/Sarthaksingh10")
        .then(response=> response.json())  // Transform the data into json
        .then(state=>{
            setstate(state)
        })
    }, [state]) */   /* One way to call api but we used a better optimized way */
    
  return (
    <div className=" bg-slate-600 text-white text-2xl flex justify-center">
        
        <img src={state.avatar_url} alt="Github Profile"  width={300}/>
     <p className="relative top-32 left-4">GitHub Followers : {state.followers}</p> 
      
      
    </div>
  )
}

export default Github


export const githubinfoloader=async ()=>{
  const response= await fetch("https://api.github.com/users/Sarthaksingh10")
  return response.json()
}