import React from "react";
import {FaBed, FaBath, FaMoneyCheckAlt} from 'react-icons/fa';
import {AiTwotoneCar} from 'react-icons/ai';
import { MdSoupKitchen } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { Link } from "react-router-dom";
import newImg1 from '../../assets/images/Buy/house1/Img1.webp';
import newImg2 from '../../assets/images/Buy/house1/Img2.webp';
import newImg3 from '../../assets/images/Buy/house1/Img3.webp';
import newImg4 from '../../assets/images/Buy/house1/Img4.webp';
import newImg5 from '../../assets/images/Buy/house1/Img5.webp';
import inside1 from '../../assets/images/Buy/house1/inside1.webp';
import inside2 from '../../assets/images/Buy/house1/inside2.webp';
import inside3 from '../../assets/images/Buy/house1/inside3.webp';
import inside4 from '../../assets/images/Buy/house1/inside4.webp';
import inside5 from '../../assets/images/Buy/house1/inside5.webp';

const Listed = [
    {
        location: 'Bannana',
        amount: '$500,000',
        bed: '6 Bed',
        bath: '6 Bath',
        park: '3 Park',
        kitchen: '4 Kitchen',
        frontPic: newImg1,
        fullDescr: '',
        pictures: [newImg1, newImg2, newImg3, newImg4, newImg5, inside1, inside2, inside3, inside4, inside5],

    }
]



export const NewListing = () => {
    return(
        <div className="px-[20px] py-[100px]">
           <div className="bg-white flex justify-center">
              <div className="shadow-2xl relative rounded max-w-[400px] ">
               <div><img src={newImg1} alt="" className="rounded" /></div>
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
                           <p className="text-[15px] flex flex-row gap items-center  text-slate-900 "><FaBed className="text-[15px] text-slate-500"/> 6 Bed</p>
                           <p className="text-[15px] flex flex-row gap items-center  text-slate-900 "> <FaBath className="text-[15px] text-slate-700"/> 6 Bath</p>
                           <p className="text-[15px] flex flex-row gap items-center  text-slate-900 "><AiTwotoneCar className="text-[15px] text-slate-500"/> 3 Park</p>
                           <p className="text-[15px] flex flex-row gap items-center  text-slate-900 "><AiTwotoneCar className="text-[15px] text-slate-500"/> 3 Park</p>
                        </div>
                        <Link className="bg-slate-900 hover:bg-slate-700 rounded-b text-center text-slate-50 text-[15px] py-[10px] uppercase font-bold">View Property</Link>
                    </div>
                </div>
              </div>
           </div>
    )
}