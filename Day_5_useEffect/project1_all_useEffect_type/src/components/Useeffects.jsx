import React, { useEffect, useState } from 'react'

function Useeffects() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
      document.title = `you clicked ${count} times` 
    },[count])


  return (
    <div>
        {/* <button id='clicked'>count {count}</button> */}

        <button onClick={()=>{setCount(count + 1)}}>name is {count}</button>
    </div>
  )
}

export default Useeffects