import './App.css'
import { MobileHeader } from './Components/Header/MobileHeader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DesktopHeader } from './Components/Header/DesktopHeader'
function App() {

  return (
    <BrowserRouter>
    <div>
    <MobileHeader/> 
    <DesktopHeader/>
      <Routes>
    
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
