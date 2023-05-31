import React from "react";
import { useContext } from "react";
import { HouseContext } from "../Context/HouseContext";

export const SearchPage = () => {
     const {filteredSearch} = useContext(HouseContext);

    return(
        <div className="py-[150px] px-[20px] ">
            <div>
{
    filteredSearch.length === 0 ?
    <h1>Search for house</h1>
    :
                filteredSearch.map(property => {
                    return(
                        <div className="shadow-2xl max-w-[400px] relative rounded  ">
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
    )
}