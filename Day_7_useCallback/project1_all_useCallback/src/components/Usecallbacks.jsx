import React, { useCallback, useState } from 'react'
import Title from './Usecallbacks/Title'
import Count from './Usecallbacks/Count'
import Button1 from './Usecallbacks/Button1'

function Usecallbacks() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  },[age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  },[salary])

  return (
    <div>
        <Title/>
        <Count title="Age" count={age}/>
        <Button1 handleClick={incrementAge}>IncrementAge</Button1>
        <Count title="Salary" count={salary}/>
        <Button1 handleClick={incrementSalary}>IncrementSalary</Button1>
    </div>
  )
}

export default Usecallbacks