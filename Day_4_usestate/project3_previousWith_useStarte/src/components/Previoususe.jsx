import React, { useState } from 'react'
function Previoususe() {
    const [count, setCount] = useState(0);
      const incrementNum = () => {
          setCount(count + 1)
      }
      const decrementNum = () => {
        setCount(count - 1)
      }
      const incrementNum5 = () => {
        for(let i=1;i<=5;i++){
          // setCount(count + 1) //if you inable this the you will get to see different
          setCount(prevCount => prevCount + 1)
        }
      }
  return (
    <>
      count = {count} <br />
      <button onClick={incrementNum}>Increment</button>
      <button onClick={decrementNum}>Decrement</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      <button onClick={incrementNum5}>increment with 5</button>
    </>
  )
}

export default Previoususe