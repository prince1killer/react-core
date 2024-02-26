import React, { useEffect, useRef } from 'react'

function Useref() {
  const refvalue = useRef(null)
  useEffect(()=>{
    refvalue.current.focus();
  },[])
  return (
    <div>
        <input ref={refvalue} type="text" />
    </div>
  )
}

export default Useref