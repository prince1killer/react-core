import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Useeffects from "./components/Useeffects"
import Blankdependency from "./components/Blankdependency"
import Cleanupbtn from "./components/Cleanupbtn"
import Dependency from "./components/Dependency"

function App() {


  return (
    <BrowserRouter>  
      <Navbar/>
      <Routes>
        <Route path="/" element={<Useeffects/>}></Route>
        <Route path="/blank" element={<Blankdependency/>}></Route>
        <Route path="/cleanup" element={<Cleanupbtn/>}></Route>
        <Route path="/dep" element={<Dependency/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
