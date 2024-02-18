import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Previoususe from './components/Previoususe'
import Objects from './components/Objects'
import Witharray from './components/Witharray'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Previoususe/>}></Route>
        <Route path='/object' element={<Objects/>}></Route>
        <Route path='/array' element={<Witharray/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
