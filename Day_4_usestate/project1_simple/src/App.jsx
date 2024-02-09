import { useState } from "react"

function App() {

  const [count, setCount] = useState(0) 

  const valueCount = () => {
    setCount(count+1)
  }

  return (
    <>
      <button onClick={valueCount}>count {count}</button>
    </>
  )
}

export default App
