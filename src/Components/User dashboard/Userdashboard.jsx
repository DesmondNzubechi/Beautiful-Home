import React from "react";
import {FaSearch} from 'react-icons/fa';
import {MdBedroomParent} from 'react-icons/md';
import {BsFillHouseAddFill} from 'react-icons/bs';




export const Userdashboard = () => {
    return(
        <div className="py-[100px] flex justify-center px-[20px] ">
        <div className="grid gap-[40px]  md:grid-cols-3">
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
    )
}