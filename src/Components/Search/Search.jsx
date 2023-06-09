import React, { useEffect } from "react";
import { useContext } from "react";
import { HouseContext } from "../Context/HouseContext";
import {FaBed, FaBath, FaMoneyCheckAlt} from 'react-icons/fa';
import {AiTwotoneCar} from 'react-icons/ai';
import { MdSoupKitchen } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { Link, NavLink } from "react-router-dom";
import Aos from "aos";
export const SearchPage = () => {
     const {filteredSearch, getSearch, searchedText, viewHouse} = useContext(HouseContext);
     useEffect(() => {
        Aos.init({duration: 2000})
     }, [])
    return(
        <div className="py-[50px] min-h-[100vh] ">
            <div>
{
    filteredSearch.length === 0 ?
    <h1 data-aos='zoom-in' className="text-center mt-[50px] uppercase font-bold  text-[30px] ">Search for house</h1>
    :
    <div className="px-[20px] pt-[50px] py-[100px]">
        <p className="capitalize font-semibold text-center my-[20px] text-[20px]">"{filteredSearch.length}" Result found for {searchedText}</p>
    <div className="bg-white gap-[50px] grid grid-col-1 justify-center md:grid-cols-2 lg:grid-cols-3">
        {
                filteredSearch.map(property => {
                    return(
                        <div data-aos='zoom-in' className="shadow-2xl max-w-[400px] relative rounded  ">
                        <div className=" " ><img src={property.frontPic} alt="" className="rounded-t w-full md:h-[300px] " /></div>
                         <div className=" flex flex-col rounded-b  bg-white bottom-0 w-full gap-1">
                             <div className="flex flex-row px-2 py-1 justify-between">
                                 <div className="flex flex-row gap-1 items-center ">
                                     <HiLocationMarker className="text-[20px] text-green-500"/>
                                     <p className="text-[17px] font-bold text-slate-900  capitalize ">{property.location} </p>
                                 </div>
                                 <div className="flex  flex-row gap-1 items-center ">
                                     <FaMoneyCheckAlt className="text-[20px] text-green-500"/>
                                     <p className="text-[20px] text-slate-900 font-bold  ">{property.amount}</p>
                                 </div>
                                 </div>
                                 <div className="flex px-2 flex-row gap-[40px] justify-between items-center ">
                                    <p className="text-[11px] md:text-[15px] font-bold flex flex-row gap items-center  text-slate-900 "><FaBed className="text-[11px] md:text-[15px] font-bold text-slate-500"/>{property.bed}</p>
                                    <p className="text-[11px] md:text-[15px] font-bold flex flex-row gap items-center  text-slate-900 "> <FaBath className="text-[11px] md:text-[15px] font-bold text-slate-700"/>{property.bath}</p>
                                    <p className="text-[11px] md:text-[15px] font-bold flex flex-row gap items-center  text-slate-900 "><AiTwotoneCar className="text-[11px] md:text-[15px] font-bold text-slate-500"/>{property.park}</p>
                                    <p className="text-[11px] md:text-[15px] font-bold flex flex-row gap items-center  text-slate-900 "><MdSoupKitchen className="text-[12px] md:text-[15px] font-bold text-slate-500"/>{property.kitchen}</p>
                                 </div>
                                 <Link onClick={() => viewHouse(property)} to='/Property-full-details' className="bg-slate-900 hover:bg-slate-700 rounded-b text-center text-slate-50 text-[15px] py-[10px] uppercase font-bold">View Property</Link>
                             </div>
                         </div>
                       
                    )
                })
            }
              </div>
              </div>
}
            </div>
        </div>
    )
}


export const SearchForm = () => {
    return(
        <NavLink to='/search-result' className='w-full'>
        <input onChange={(e) => getSearch(e) } className="w-full border-b-2 border-slate-400 relative z-[5]  text-[20px]  text-slate-500 py-[10px] text-center bg-transparent px-[10px] outline-0 " placeholder="Search here " type="text"  />
     </NavLink> 
    )
}