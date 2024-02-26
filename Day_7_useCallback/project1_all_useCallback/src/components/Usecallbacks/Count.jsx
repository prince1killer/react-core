import React from 'react'

function Count({title,count}) {
  return (
    <div>{title} - {count}</div>
  )
}

export default React.memo(Count)