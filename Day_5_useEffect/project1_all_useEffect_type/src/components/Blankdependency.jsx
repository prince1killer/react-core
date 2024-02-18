import React, { useEffect, useState } from 'react'

function Blankdependency() {
    const [value,setValue] = useState("")
    const [click,setClick] = useState(0)
    useEffect(()=>{
        console.log(value)
    },[click])
  return (
    <div>
        <h1>here we had explane how to make render only ones from using blank dependency array</h1>
        <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
        <button style={{padding:"3px 5px"}} onClick={()=>{setClick(click+1)}}>Click me {click}</button>
    </div>
  )
}

export default Blankdependency