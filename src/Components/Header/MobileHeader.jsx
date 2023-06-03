import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import  { HiOutlineBars3, HiXMark } from 'react-icons/hi2';
import { BsFillHouseCheckFill } from 'react-icons/bs';
import { FaSearch,  } from 'react-icons/fa';
import {FaUserCircle} from 'react-icons/fa';
import { useContext } from "react";
import { HouseContext } from "../Context/HouseContext";


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

export const MobileHeader = () => {
const {getSearch, newUser} = useContext(HouseContext);

const [showLink, setShowLink] = useState('left-[-1000px]');
const [icons, setIcons] = useState({hideicon: false, showIcon: true});
const showNav = () => {
    setIcons({hideicon: true, showIcon: false});
    setShowLink('left-0');
}
const hideNav = () => {
    setIcons({hideicon: false, showIcon: true});
    setShowLink('left-[-1000px]');
}
    return(
        
        <>
        <div className="bg-slate-900 md:hidden px-[20px] gap-5 z-[5] items-center fixed top-0 w-full text-slate-50 flex flex-row justify-around py-[10px]  ">
            <div className="relative z-[1]  font-bold uppercase text-[15px]"><NavLink to='/' className='flex items-center flex-row' >Homebuilder<BsFillHouseCheckFill/></NavLink></div>
            <NavLink to='/search-result'>
                <input onChange={(e) => getSearch(e) } className="w-full relative z-[5] rounded  text-slate-500 py-[5px]  px-[10px] outline-0 " placeholder="Search here " type="text"  />
             </NavLink> 
         
           <ul className={`flex transition duration-1000 ease-out delay-500  flex-col  gap-3 fixed bg-slate-900  top-0 ${showLink} w-[50%] bottom-0 px-[20px]  pt-[100px]`}>
           {
            linking.map(linkss => {
                return <li><NavLink onClick={hideNav} style={({isActive}) => { return isActive? {borderBottom: '2px solid white'} : {} }} className='text-slate-200 text-[20px] font-[500] ' to={linkss.link}>{linkss.name}</NavLink></li>
            })
           }
           <div className="flex flex-col ">
            {!newUser &&
           <div className="flex flex-col gap-2">
            <NavLink onClick={hideNav} to='/login' className='bg-pink-500 max-w-[100px] uppercase py-1 rounded shadow-2xl text-[20px] px-[20px] '>Login</NavLink>
            <NavLink onClick={hideNav} to='/signup' className='bg-slate-50 max-w-[100px] text-slate-900 uppercase text-center font-[500] py-1 rounded shadow-2xl text-[20px] px-[20px] '>Signup</NavLink>
           </div>
}
          {newUser && <NavLink onClick={hideNav} to='/dashboard' className=' my-[10px] w-fit rounded-full  text-slate-300 active:text-white  uppercase text-center font-[500] py-1 rounded shadow-2xl text-[50px] p-2'><FaUserCircle className="shadow-2xl"/></NavLink>
}
           </div>
           </ul>
           <div className="flex gap-5 items-center">
          
          {icons.showIcon &&  <HiOutlineBars3 onClick={showNav} className="text-slate-50 text-[30px] "/>}
         {icons.hideicon &&  <HiXMark onClick={hideNav} className="text-slate-50 text-[30px]"/>}
           </div>
        </div>
        </>
    )
}