import React, { useState } from "react";
import {FaBed, FaBath, FaMoneyCheckAlt} from 'react-icons/fa';
import {AiTwotoneCar} from 'react-icons/ai';
import { MdSoupKitchen } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import bgImg from '../../assets/images/Rent/rent10/img1.webp';
import { Link } from "react-router-dom";
import { HouseContext } from "../../Components/Context/HouseContext";
import { useContext } from "react";
import { diffRent } from "./RentingHouses";
import { collection, doc,  getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect } from "react";
import { ref } from "firebase/storage";
import Aos from "aos";

export const RentHouse = () => {
    const  {viewHouse} = useContext(HouseContext);
    const  [houses, setHouses] = useState([]);
    const diffRentH = [...diffRent,  ...houses]

    const dataStorage = collection(db, 'rent');
    useEffect(() => {
        Aos.init({duration: 2000})
        const getHouses = async () => {
           try {
               const data = await getDocs(dataStorage);
           console.log(data);
           setHouses(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
           console.log(houses);
           } catch (error) {
               console.log(error);
           }
        };
        getHouses();
       }, []);

    return(
        <div>
            
        <div  
    style={{ backgroundImage: `url(${bgImg})` }}
  className={`min-h-[50vh] relative after:left-0 after:right-0 after:absolute after:top-0 after:h-full bg-center flex items-center after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
    <div data-aos='zoom-in'  className="relative z-[1] py-[50px] max-w-[700px]">
    <h1 className="font-bold text-slate-50 text-[50px] ">Rent Home</h1>
<p className="text-slate-200 font-fonty text-[17px] ">Rental properties are typically managed by landlords or property management companies, which means you don't have to worry about maintenance and repairs. If something goes wrong, such as a plumbing issue or a broken appliance, you can simply contact the landlord or property manager to have it fixed.</p>
    </div>

  </div>
        <div className="px-[20px] pt-[120px] py-[100px]">
           <div className="bg-white gap-[50px] grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3">
            {
                diffRentH.map(property => {
                    return(
                        <div data-aos='zoom-in-down' className="shadow-2xl max-w-[400px] relative rounded  ">
                            {console.log(property.pictures[3])}
                        <div className=" " ><img src={property.pictures[0]} alt="" className="rounded-t w-full md:h-[300px] " /></div>
                         <div className=" flex flex-col rounded-b  bg-white bottom-0 w-full gap-1">
                             <div className="flex flex-row px-2 py-1 justify-between"> 
                                 <div className="flex flex-row gap-1 items-center ">
                                     <HiLocationMarker className="text-[20px] text-green-500"/>
                                     <p className="text-[17px] font-bold text-slate-900  capitalize ">{property.location} </p>
                                 </div>
                                 <div className="flex  flex-row gap-1 items-center ">
                                     <FaMoneyCheckAlt className="text-[20px] text-green-500"/>
                                     <p className="text-[17px] text-slate-900 font-bold  ">{property.amount}</p>
                                 </div>
                                 </div>
                                 <div className="flex px-2 flex-row gap-[40px] justify-between items-center ">
                                    <p className="text-[8px] md:text-[12px] font-bold flex flex-row gap items-center  text-slate-900 "><FaBed className="text-[8px] md:text-[12px] font-bold text-slate-500"/>{property.bed}</p>
                                    <p className="text-[8px] md:text-[12px] font-bold flex flex-row gap items-center  text-slate-900 "> <FaBath className="text-[8px] md:text-[12px] font-bold text-slate-700"/>{property.bath}</p>
                                    <p className="text-[8px] md:text-[12px] font-bold flex flex-row gap items-center  text-slate-900 "><AiTwotoneCar className="text-[8px] md:text-[12px] font-bold text-slate-500"/>{property.park}</p>
                                    <p className="text-[8px] md:text-[12px] font-bold flex flex-row gap items-center  text-slate-900 "><MdSoupKitchen className="text-[12px] md:text-[12px] font-bold text-slate-500"/>{property.kitchen}</p>
                                 </div>
                                 <Link onClick={() => viewHouse(property)} to='/Property-full-details' className="bg-slate-900 hover:bg-slate-700 rounded-b text-center text-slate-50 text-[12px] py-[10px] uppercase font-bold">View Property</Link>
                             </div>
                         </div>
                       
                    )
                })
            }
             </div>
           </div>
           </div>
    )
}