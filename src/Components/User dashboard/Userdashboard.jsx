import React from "react";
import {FaSearch} from 'react-icons/fa';
import {MdBedroomParent} from 'react-icons/md';
import {BsFillHouseAddFill} from 'react-icons/bs';
import {FaUserCircle} from 'react-icons/fa';
import { useContext } from "react";
import { HouseContext } from "../Context/HouseContext";
import { SideLink } from "./SideLink";

export const Userdashboard = () => {

    const {newUser, signout, navig} = useContext(HouseContext);
    return(
      !newUser? navig('/login') :
        <div className="absolute  items-center top-0 w-full left-0 right-0 h-full bg-white z-[20]">
       <SideLink/>
             <div className="flex w-full  md:px-[70px]  flex-row items-center gap-5 justify-between  p-5 bg-white">
         <h1 className="flex font-bold ml-[30px] items-center text-[20px] text-white uppercase  ">Homebuilder <BsFillHouseAddFill/></h1>
         <FaUserCircle className="text-[50px] shadow-2xl rounded-full"/>
         {/*
       <button onClick={signout} className='bg-red-700 shadow-2xl text-slate-50 uppercase py-1 rounded shadow-2xl text-[20px] px-[20px] '></button>*/}
         </div>
        <div className=" md:ml-[200px] flex items-end ml-[50px] justify-center  ">
         
          <div className="flex flex-col items-center justify-center  gap-[40px] ">
          <p className="font-[400] capitalize text-center my-[30px] text-[20px] md:text-[30px] ">Hi <span className="font-bold italic">{newUser?.email}</span> ,  Welcome!</p>
          
        <div className="grid gap-[20px] px-[40px] py-[20px]  md:grid-cols-3">
         <div className="flex justify-center  min-w-[200px] min-h-[150px] p-5 flex-col items-center gap-3 shadow rounded  ">
            <BsFillHouseAddFill className="text-[50px]"/>
            <p className="text-[20px] uppercase font-bold">Buy Home</p>
         </div>
         <div className="flex justify-center md:min-w-[250px] min-w-[200px] min-h-[150px] p-5 flex-col items-center gap-3 shadow rounded  ">
            <MdBedroomParent className="text-[50px]"/>
            <p className="text-[20px] uppercase font-bold">Rent Home</p>
         </div>
         <div className="flex justify-center min-w-[200px] min-h-[150px] p-5 flex-col items-center gap-3 shadow rounded  ">
            <FaSearch className="text-[50px]"/>
            <p className="text-[20px] uppercase font-bold">Search For Home</p>
         </div>
        </div>
        </div>
        </div>
        </div>
        
    )
}