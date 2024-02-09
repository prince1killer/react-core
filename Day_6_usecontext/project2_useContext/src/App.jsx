import Login from "./components/Login"
import Portfolio from "./components/Portfolio"
import UserContextProvider from "./context/UserContextProvider"

function App() {


  return (
    <UserContextProvider>
      <Portfolio/>
      <Login/>
    </UserContextProvider>
  )
}

export default App
