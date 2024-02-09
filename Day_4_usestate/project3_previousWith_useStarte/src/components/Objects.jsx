import React, { useState } from 'react'

function Objects() {
    const [name, setName] = useState({firstName:"",lastName:""})
  return (
    <>
  {/* note :-   just remove ...name from setName you will got what happend here */}


        Enter the First Name = <input type="text" value={name.firstName} onChange={(e)=>setName({...name, firstName: e.target.value})}/> <br />
        Enter the Last Name = <input type="text"  value={name.lastName} onChange={(e)=>setName({...name, lastName: e.target.value})}/> <br />
        <label>your First Name = {name.firstName}</label> <br />
        <label> your Last Name ={name.lastName}</label> <br />
        <h2>{JSON.stringify(name)}</h2>
    </>
  )
}

export default Objects