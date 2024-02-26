import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Useref from "./components/Useref"
import Useref2 from "./components/Useref2"

function App() {

  return (
    <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Useref/>}></Route>
              <Route path="/int" element={<Useref2/>}></Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App
