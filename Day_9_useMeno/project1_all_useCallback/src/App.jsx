import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Usememo from "./components/Usemeno"

function App() {

  return (
    <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Usememo/>}></Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App
