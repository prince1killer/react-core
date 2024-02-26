import { BrowserRouter, Route, Routes } from "react-router-dom"
import Usecallbacks from "./components/Usecallbacks"
import Navbar from "./components/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Usecallbacks/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
