import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Signin() {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const {setUser} = useContext(UserContext) 
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(username)
    }
  return (
    <div>
        <>
        <h1>Sign up</h1>
        Enter the userName = <input type="text" onChange={(e)=>setUsername(e.target.value)}/> <br /> 
        Enter the userName = <input type="text" onChange={(e)=>setpassword(e.target.value)}/> <br />
        <button onClick={handleSubmit}>Submit</button>
        </>
    </div>
  )
}

export default Signin