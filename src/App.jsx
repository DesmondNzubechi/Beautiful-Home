import './App.css';
import { MobileHeader } from './Components/Header/MobileHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DesktopHeader } from './Components/Header/DesktopHeader';
import { Home } from './Pages/Home/Home';
import { HousesDetails } from './Components/Context/HouseContext';
import { PropertyDetails } from './Components/PropertyDetails/PropertyDetails';
import { BuyHouse } from './Pages/Buy/Buy';
import { RentHouse } from './Pages/Rent/Rent';
import { ScrollToTop } from './Components/ScrollTop/Scrolltop';
import { SearchPage } from './Components/Search/Search';
import { Login } from './Components/Login/login';
import { Signup } from './Components/signup/Signup';
import { Userdashboard } from './Components/User dashboard/Userdashboard';
function App() {
  return (
    <BrowserRouter>
    <HousesDetails>
    <div className='overflow-x-hidden'>
    <MobileHeader/> 
    <DesktopHeader/>
    <ScrollToTop/>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search-result' element={<SearchPage/>} />
    <Route path='/buy' element={<BuyHouse/>} />
    <Route path='/rent' element={<RentHouse/>} />
    <Route path='/Property-full-details' element={<PropertyDetails/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/dashboard' element={ <Userdashboard/>} />
      </Routes>
   
    </div>
    </HousesDetails>
    </BrowserRouter>
  )
}

export default App
