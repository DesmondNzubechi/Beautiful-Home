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


export const Userdashboard = () => {

    const [logoutB, setLogoutB] = useState(false);
    const {newUser, signout, navig} = useContext(HouseContext);
    return(
      !newUser? navig('/login') :
        <div className="absolute  items-center top-0 w-full left-0 right-0 h-full bg-white z-[20]">
       <SideLink/>
             <div className="flex w-full fixed ml-[10px]  top-0 right-0 left-0 md:px-[70px]  flex-row items-center  gap-5 p-5 bg-white">
         <h1 className="flex font-bold  items-center text-[20px]  uppercase text-white "></h1>
      <SearchForm />
       <FaUserCircle onClick={() => {logoutB? setLogoutB(false):setLogoutB(true)}} className="text-[50px] active:text-slate-900 text-slate-500   shadow-2xl rounded-full"/>
       {logoutB &&  <div className=" fixed flex flex-col gap-2 rounded shadow-2xl top-[70px] bg-slate-900 p-3 right-5 "> 
     { /* <button onClick={signout} className=' shadow-2xl text-slate-50 uppercase py-1 rounded shadow-2xl text-[20px]  '>profile</button>
       <hr />*/}
     <button onClick={signout} className='shadow-2xl text-slate-50 uppercase py-1 rounded shadow-2xl text-[20px]  '>Logout</button>
       </div>  }
         </div>
        <div className=" md:ml-[200px] flex items-end ml-[50px] justify-center  ">
         
          <div className="flex flex-col items-center justify-center  gap-[40px] ">
          <p className="font-[400] capitalize text-center my-[30px] text-[20px] md:text-[30px] ">Hi <span className="font-bold italic">{newUser?.email}</span> ,  Welcome!</p>
          
        <div className="grid gap-[20px] px-[40px] py-[20px]  md:grid-cols-3">
         <div className="flex justify-center bg-gradient-to-r from-slate-900 to-sky-500 text-white min-w-[200px] min-h-[150px] p-5 flex-col items-center gap-3 shadow rounded  ">
            <BsFillHouseAddFill className="text-[50px]"/>
            <p className="text-[20px] uppercase font-bold">Buy Home</p>
         </div>
         <div className="flex justify-center bg-gradient-to-r from-slate-900 to-sky-500 text-white min-w-[200px] min-h-[150px] p-5 flex-col items-center gap-3 shadow rounded  ">
            <MdBedroomParent className="text-[50px]"/>
            <p className="text-[20px] uppercase font-bold">Rent Home</p>
         </div>
         <div className="flex justify-center bg-gradient-to-r from-slate-900 to-sky-500 text-white min-w-[200px] min-h-[150px] p-5 flex-col items-center gap-3 shadow rounded  ">
            <FaSearch className="text-[50px]"/>
            <p className="text-[20px] uppercase font-bold">Search For Home</p>
         </div>
        </div>
      
        </div>
        </div>
        </div>
        
    )
}