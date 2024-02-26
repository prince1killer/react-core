import React, { useEffect, useRef, useState } from 'react'

function Useref2() {
    const [timer, setTimer] = useState(0)
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current = setInterval(()=>{setTimer(timer + 1)},1000)

        return ()=>{
            clearInterval(inputRef.current)
           }
    })


  return (
    <div>
        time count - {timer}
        <button onClick={()=>{clearInterval(inputRef.current)}}>Clear Interval</button> 
    </div>
  )
}

export default Useref2