import React, { useState } from "react";
import {FaSearch} from 'react-icons/fa';
import {MdBedroomParent} from 'react-icons/md';
import {BsFillHouseAddFill} from 'react-icons/bs';
import {FaUserCircle} from 'react-icons/fa';
import { useContext } from "react";
import { HouseContext } from "../Context/HouseContext";
import { SideLink } from "./SideLink";
import { BuyHouse } from "../../Pages/Buy/Buy";
import { SearchForm } from "../Search/Search";
import { Link } from "react-router-dom";


export const Userdashboard = () => {

    const [logoutB, setLogoutB] = useState(false);
    const {newUser, signout, navig} = useContext(HouseContext);
    return(
      !newUser? navig('/login') :
        <div className="absolute  items-center top-0 w-full left-0 right-0 h-full bg-white z-[20]">
       <SideLink/>
             <div className="flex  flex-row items-center  gap-5 p-5 bg-white">
         <h1 className="flex font-bold  items-center text-[20px]  uppercase text-white ">bhj</h1>
    
       <FaUserCircle onClick={() => {logoutB? setLogoutB(false):setLogoutB(true)}} className="text-[50px] fixed top-5 right-5  active:text-slate-900 text-slate-500   shadow-2xl rounded-full"/>
       {logoutB &&  <div className=" fixed flex flex-col gap-2 rounded shadow-2xl top-[70px] bg-slate-900 p-3 right-5 "> 
     { /* <button onClick={signout} className=' shadow-2xl text-slate-50 uppercase py-1 rounded shadow-2xl text-[20px]  '>profile</button>
       <hr />*/}
     <button onClick={signout} className='shadow-2xl text-slate-50 uppercase py-1 rounded shadow-2xl text-[20px]  '>Logout</button>
       </div>  }
         </div>
        <div className=" md:ml-[200px] flex items-end ml-[50px] justify-center  ">
         
          <div className="flex flex-col items-center justify-center  gap-[40px] ">
          <p className="font-[400] capitalize text-center  text-[20px] md:text-[30px] ">Hi <span className="font-bold uppercase">{newUser?.email}</span>👋</p>
          
        <div className="grid gap-[20px] px-[40px] py-[10px]  md:grid-cols-2">
         <Link to='/buy' className="flex justify-center bg-gradient-to-r from-slate-900 to-sky-500 text-white  md:min-w-[400px] min-w-[200px] w-full md:min-h-[200px] p-5 flex-col items-center gap-3 shadow rounded  ">
            <BsFillHouseAddFill className="text-[50px]"/>
            <p className="text-[20px] uppercase font-bold">Buy Home</p>
         </Link>
         <Link to='/rent' className="flex justify-center bg-gradient-to-r from-slate-900 to-sky-500 text-white  md:min-w-[400px] min-w-[200px] md:min-h-[200px] p-5 flex-col items-center gap-3 shadow rounded  ">
            <MdBedroomParent className="text-[50px]"/>
            <p className="text-[20px] uppercase font-bold">Rent Home</p>
         </Link>
         <Link to='/search' className="flex justify-center bg-gradient-to-r from-slate-900 to-sky-500 text-white  md:min-w-[400px] min-w-[200px] md:min-h-[200px] p-5 flex-col items-center gap-3 shadow rounded  ">
            <FaSearch className="text-[50px]"/>
            <p className="text-[20px] uppercase font-bold">Search For Home</p>
         </Link>
         <Link to='/contact' className="flex justify-center bg-gradient-to-r from-slate-900 to-sky-500 text-white  md:min-w-[400px] min-w-[200px] md:min-h-[200px] p-5 flex-col items-center gap-3 shadow rounded  ">
            <FaSearch className="text-[50px]"/>
            <p className="text-[20px] uppercase font-bold">Contact</p>
         </Link>
        </div>
      
        </div>
        </div>
        </div>
        
    )
}