import React, { useEffect, useState } from 'react'

function Cleanup() {
  const [x,setX] = useState(0)
  const [y,setY] = useState(0)

  const movementCap = (e) => {
    console.log("mouse event")
    setX(e.clientX)
    setY(e.clientY)
  }
  
  useEffect(()=>{
    console.log("useEffect callback")
    console.log(`x = ${x} and  y = ${y}`)
    window.addEventListener('mousemove',movementCap)
    return()=>{
      console.log("cleanup function is working")
      window.removeEventListener("mousemove",movementCap)
    }

  },[])

  return (
    <div style={{width:100+"%", height:100+"%", display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <label >x = {x} and y = {y}</label>
    </div>
  )
}

export default Cleanup