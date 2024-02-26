import React, { useMemo, useState } from 'react'

function Usememo() {
  const [incrementOne,setIncrementOne] = useState(0)
  const [incrementTwo,setIncrementTwo] = useState(0)

  const OddEven = useMemo(() => {
    let i = 0
    console.log("its working")
    while(i<2000000000)i++
    return incrementOne%2===0
  },[incrementOne])
  return (
    <div>
        <div>
          <button onClick={()=>{setIncrementOne(incrementOne + 1)}}>count one - {incrementOne}</button>
          <label>{OddEven ?"Even":"Odd"}</label>
        </div>
        <div>
          <button onClick={()=>{setIncrementTwo(incrementTwo + 1)}}>count Two - {incrementTwo}</button>
        </div>
    </div>
  )
}

export default Usememo