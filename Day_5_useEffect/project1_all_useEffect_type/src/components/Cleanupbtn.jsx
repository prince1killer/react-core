import React, { useState } from 'react'
import Cleanup from './Cleanup'

function Cleanupbtn() {
    const [display,setDsiplay] = useState(true)
  return (
    <div>
        <button onClick={()=>{setDsiplay(!display)}}>Click me For Toggle Display</button><br />
        {display && <Cleanup/>}
    </div>
  )
}

export default Cleanupbtn