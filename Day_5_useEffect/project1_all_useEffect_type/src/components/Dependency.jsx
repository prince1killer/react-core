import React, { useEffect, useState } from 'react'

function Dependency() {
    const [count, setCount] = useState(0)

    const counting = () => {
        setCount(count + 1)
    }

    useEffect(()=>{
        console.log(count)
        const interval = setInterval(counting, 1000)
        return ()=>{
            clearInterval(interval)
        }
    },[count])
  return (
    <div>
        <label>{count}</label>
    </div>
  )
}

export default Dependency