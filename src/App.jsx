import './App.css'
import { MobileHeader } from './Components/Header/MobileHeader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DesktopHeader } from './Components/Header/DesktopHeader'
import { Home } from './Pages/Home/Home'
function App() {

  return (
    <BrowserRouter>
    <div>
    <MobileHeader/> 
    <DesktopHeader/>
      <Routes>
    <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
