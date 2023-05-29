import React from "react";
import {FaBed, FaBath, FaMoneyCheckAlt} from 'react-icons/fa';
import {AiTwotoneCar} from 'react-icons/ai';
import { MdSoupKitchen } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { Link } from "react-router-dom";
import firstNewImg1 from '../../assets/images/Buy/house1/Img1.webp';
import firstNewImg2 from '../../assets/images/Buy/house1/img2.webp';
import firstNewImg3 from '../../assets/images/Buy/house1/img3.webp';
import firstNewImg4 from '../../assets/images/Buy/house1/img4.webp';
import firstNewImg5 from '../../assets/images/Buy/house1/img5.webp';
import Finside1 from '../../assets/images/Buy/house1/inside1.webp';
import Finside2 from '../../assets/images/Buy/house1/inside2.webp';
import Finside3 from '../../assets/images/Buy/house1/inside3.webp';
import Finside4 from '../../assets/images/Buy/house1/inside4.webp';
import Finside5 from '../../assets/images/Buy/house1/inside5.webp';

import secondNewImg1 from '../../assets/images/Buy/house1/Img1.webp';
import secondNewImg2 from '../../assets/images/Buy/house1/img2.webp';
import secondNewImg3 from '../../assets/images/Buy/house1/img3.webp';
import secondNewImg4 from '../../assets/images/Buy/house1/img4.webp';
import secondNewImg5 from '../../assets/images/Buy/house1/img5.webp';
import sInside1 from '../../assets/images/Buy/house1/inside1.webp';
import sInside2 from '../../assets/images/Buy/house1/inside2.webp';
import sInside3 from '../../assets/images/Buy/house1/inside3.webp';
import sInside4 from '../../assets/images/Buy/house1/inside4.webp';
import sInside5 from '../../assets/images/Buy/house1/inside5.webp';




const Listed = [
    {
        location: 'Bannana',
        amount: '$500,000',
        bed: '6 Bed',
        bath: '6 Bath',
        park: '3 Park',
        kitchen: '4 Kitchen',
        frontPic: firstNewImg1,
        fullDescr: '',
        pictures: [firstNewImg1, firstNewImg2, firstNewImg3, firstNewImg4, firstNewImg5, Finside1, Finside2, Finside3, Finside4, Finside5],

    }
]



export const NewListing = () => {
    return(
        <div className="px-[20px] py-[100px]">
           <div className="bg-white flex justify-center">
              <div className="shadow-2xl relative rounded max-w-[400px] ">
               <div><img src={firstNewImg1} alt="" className="rounded" /></div>
                <div className=" flex flex-col rounded-b  bg-white bottom-0 w-full gap-1">
                    <div className="flex flex-row px-2 py-1 justify-between">
                        <div className="flex flex-row gap-1 items-center ">
                            <HiLocationMarker className="text-[20px] text-green-500"/>
                            <p className="text-[17px] font-bold text-slate-900  capitalize ">Banana Island Land </p>
                        </div>
                        <div className="flex  flex-row gap-1 items-center ">
                            <FaMoneyCheckAlt className="text-[20px] text-green-500"/>
                            <p className="text-[20px] text-slate-900 font-bold  ">$500,000</p>
                        </div>
                        </div>
                        <div className="flex px-2 flex-row gap-[40px] justify-between items-center ">
                           <p className="text-[11px] md:text-[15px] font-bold flex flex-row gap items-center  text-slate-900 "><FaBed className="text-[11px] md:text-[15px] font-bold text-slate-500"/> 6Bed</p>
                           <p className="text-[11px] md:text-[15px] font-bold flex flex-row gap items-center  text-slate-900 "> <FaBath className="text-[11px] md:text-[15px] font-bold text-slate-700"/>6Bath</p>
                           <p className="text-[11px] md:text-[15px] font-bold flex flex-row gap items-center  text-slate-900 "><AiTwotoneCar className="text-[11px] md:text-[15px] font-bold text-slate-500"/> 3Park</p>
                           <p className="text-[11px] md:text-[15px] font-bold flex flex-row gap items-center  text-slate-900 "><MdSoupKitchen className="text-[12px] md:text-[15px] font-bold text-slate-500"/> 3kitchen</p>
                        </div>
                        <Link className="bg-slate-900 hover:bg-slate-700 rounded-b text-center text-slate-50 text-[15px] py-[10px] uppercase font-bold">View Property</Link>
                    </div>
                </div>
              </div>
           </div>
    )
}