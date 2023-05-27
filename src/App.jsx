import './App.css'
import { MobileHeader } from './Components/Header/MobileHeader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <div>
    <MobileHeader/> 
      <Routes>
    
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
