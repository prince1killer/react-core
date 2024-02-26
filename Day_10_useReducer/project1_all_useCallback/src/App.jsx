import { BrowserRouter, Route, Routes } from "react-router-dom"
import Usecallbacks from "./components/Usecallbacks"

function App() {

  return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Usecallbacks/>}></Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App
