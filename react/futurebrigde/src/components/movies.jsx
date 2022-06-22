import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import "./movies.css"
export const Movies=()=>{
    const [data,setData] =useState([])
    useEffect(()=>{
      axios.get("http://localhost:3011/movies").then((res)=>{
        console.log(res.data)
        setData([...res.data])
      })
    },[])
    return(
        <div className="main_div">
         {
            data.map((e)=>(
                <div key={e._id}>
                     <h2>{e.name}</h2>
                     <h4>{e.rating}</h4>
                     <p>{e.released_date}</p>
                </div>
            ))
         }
        </div>
    )
}