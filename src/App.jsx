import './App.css'
import { MobileHeader } from './Components/Header/MobileHeader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DesktopHeader } from './Components/Header/DesktopHeader'
import { Home } from './Pages/Home/Home'
import { HousesDetails } from './Components/Context/HouseContext'
import { PropertyDetails } from './Components/PropertyDetails/PropertyDetails'
function App() {

  return (

    <BrowserRouter>
    <HousesDetails>
    <div className='overflow-x-hidden'>
    <MobileHeader/> 
    <DesktopHeader/>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Property-full-details' element={<PropertyDetails/>}/>
      </Routes>
    </div>
    </HousesDetails>
    
    </BrowserRouter>
  )
}

export default App
