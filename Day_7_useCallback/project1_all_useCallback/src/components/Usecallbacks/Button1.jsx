
import React from 'react'

function Button1({handleClick, children}) {
    console.log('Rendering Items - ',children)
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default React.memo(Button1)