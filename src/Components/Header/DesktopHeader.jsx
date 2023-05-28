import { NavLink } from "react-router-dom";
import { BsFillHouseCheckFill } from 'react-icons/bs';

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
    return(
        <>
        <div className="bg-slate-900 px-[20px] gap-5 z-[5] items-center fixed top-0 w-full text-slate-50 hidden md:flex md:flex-row justify-between px-[20px] py-[20px]  ">
            <div className=" flex flex-row gap-3 font-bold uppercase text-[20px]"><NavLink className='flex items-center flex-row' to='/'>Homebuilder<BsFillHouseCheckFill/></NavLink> 
            <input className=" rounded w-full   text-slate-500 py-[5px] text-center outline-0 " placeholder="Search For Home" type="text"  />
</div>

<div className="flex flex-row gap-4 ">
    {linking.map(links => {return <NavLink to={links.link} className='text-slate-200 text-[25px] font-[400] '>{links.name}</NavLink>})}
    <div className="flex flex-row gap-2">
            <NavLink className='bg-pink-500 max-w-[100px] uppercase py-1 rounded shadow-2xl text-[20px] px-[20px] '>Login</NavLink>
            <NavLink className='bg-slate-50 max-w-[100px] text-slate-900 uppercase text-center font-[500] py-1 rounded shadow-2xl text-[20px] px-[20px] '>Signup</NavLink>
           </div>
</div>
          
        </div>
        </>
    )
}