import React, { useState } from 'react'

function Witharray() {

  const [items,setItems] = useState([])

  const addItems = () => {
    setItems([...items, { // here i use sprade operator to make continue loop
      id : items.length,
      value : Math.floor(Math.random() * 10 ) + 1
    }])
  } 

  return (
    <div>
      <button onClick={addItems}>Click me</button>
      <ul>
        {items.map(items=>(
          <li key={items.id}>{items.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default Witharray