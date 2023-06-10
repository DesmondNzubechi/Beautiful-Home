import { NavLink } from "react-router-dom";
import { BsFillHouseCheckFill } from 'react-icons/bs';
import { useContext } from "react";
import { HouseContext } from "../Context/HouseContext";
import {FaUserCircle} from 'react-icons/fa';

const linking = [
    {
        name: 'Home',
        link: '/',
    },
    
    {
        name: 'Buy',
        link: '/buy',
    },
    {
        name: 'Rent',
        link: '/rent',
    },
    {
        name: 'Sell',
        link: '/sell',
    },
    {
        name: 'Contact',
        link: '/contact',
    },
    {
        name: 'About',
        link: '/about',
    }
]

export const DesktopHeader = () => {
    const {getSearch, newUser} = useContext(HouseContext);

    return(
       
        <>
        <div className="bg-slate-900 px-[20px] gap-5 z-[5] items-center fixed top-0 w-full text-slate-50 hidden md:flex md:flex-row justify-between px-[20px] py-[20px]  ">
            <div className=" flex flex-row gap-3 font-bold uppercase text-[20px]"><NavLink className='flex items-center flex-row' to='/'>Homebuilder<BsFillHouseCheckFill/></NavLink> 
            <NavLink to='/search-result'>
            <input onChange={(e) => getSearch(e)} className=" rounded w-full   text-slate-500 py-[5px] text-center outline-0 " placeholder="Search For Home" type="text"  />
            </NavLink>
            
</div>

<div className="flex flex-row gap-4 ">
    {linking.map(links => {return <NavLink style={({isActive}) => {
                return isActive? {borderBottom: '2px solid white'} : {}
            }}  to={links.link} className='text-slate-200 text-[20px] font-[400] '>{links.name}</NavLink>})}
            <div className="flex items-center flex-row">
           {!newUser &&     
    <div className="flex flex-row gap-2">
            <NavLink to='/login' className='bg-pink-500 max-w-[100px] uppercase py-1 rounded shadow-2xl text-[15px] px-[15px] '>Login</NavLink>
            <NavLink to='/signup' className='bg-slate-50 max-w-[100px] text-slate-900 uppercase text-center font-[500] py-1 rounded shadow-2xl text-[15px] px-[15px] '>Signup</NavLink>
           </div>}
         {newUser &&  <NavLink  to='/dashboard' className='  w-fit rounded-full  text-slate-300 active:text-white  uppercase text-center font-[500] shadow-2xl text-[30px] p-2'><FaUserCircle className="shadow-2xl"/></NavLink>}
           </div>
</div>
          
        </div>
        </>
    )
}