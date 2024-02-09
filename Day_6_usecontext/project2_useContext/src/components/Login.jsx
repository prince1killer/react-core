import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const {user} = useContext(UserContext)
  console.log(user)
  if (!user) return <h1>Please Login</h1>
  return (
    <div>
        <h1>Login</h1>
        <p>Wlcome {user}</p>
    </div>
  )
}

export default Login