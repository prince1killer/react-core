import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Previoususe from './components/Previoususe'
import Objects from './components/Objects'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Previoususe/>}></Route>
        <Route path='/object' element={<Objects/>}></Route>
        <Route path='/array'></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
