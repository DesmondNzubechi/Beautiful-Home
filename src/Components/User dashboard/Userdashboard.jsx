import React from "react";
import {FaSearch} from 'react-icons/fa';
import {MdBedroomParent} from 'react-icons/md';
import {BsFillHouseAddFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import { useContext } from "react";
import { HouseContext } from "../Context/HouseContext";



export const Userdashboard = () => {

    const {newUser, signout} = useContext(HouseContext);
    return(
        <div className="absolute  items-center top-0 w-full left-0 right-0 h-full bg-white z-[20]">
             <div className="flex w-full  flex-row items-center gap-5 justify-between p-5 bg-Tp">
         <h1 className="flex font-bold items-center text-[20px] text-white uppercase  ">Homebuilder <BsFillHouseAddFill/></h1>
       <button onClick={signout} className='bg-red-700 shadow-2xl text-slate-50 uppercase py-1 rounded shadow-2xl text-[20px] px-[20px] '>Logout</button>
         </div>
        <div className="py-[100px] flex items-center items-center justify-center  ">
         
          <div className="flex flex-col items-center justify-center  gap-[40px] ">
         
          <p className="font-[500] text-center text-[20px] md:text-[30px] ">Welcome {newUser?.email}!</p>
        <div className="grid gap-[20px] px-[40px]  md:grid-cols-3">
         <div className="flex justify-center min-w-[200px] min-h-[150px] p-5 flex-col items-center gap-3 shadow-2xl rounded  ">
            <BsFillHouseAddFill className="text-[50px]"/>
            <p className="text-[20px] uppercase font-bold">Buy Home</p>
         </div>
         <div className="flex justify-center min-w-[200px] min-h-[150px] p-5 flex-col items-center gap-3 shadow-2xl rounded  ">
            <MdBedroomParent className="text-[50px]"/>
            <p className="text-[20px] uppercase font-bold">Rent Home</p>
         </div>
         <div className="flex justify-center min-w-[200px] min-h-[150px] p-5 flex-col items-center gap-3 shadow-2xl rounded  ">
            <FaSearch className="text-[50px]"/>
            <p className="text-[20px] uppercase font-bold">Search For Home</p>
         </div>
        </div>
        </div>
        </div>
        </div>
    )
}