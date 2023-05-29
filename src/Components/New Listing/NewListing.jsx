import React from "react";
import {FaBed, FaBath, FaMoneyCheckAlt} from 'react-icons/fa';
import {AiTwotoneCar} from 'react-icons/ai';
import { MdSoupKitchen } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { Link } from "react-router-dom";
//importing images from house 1
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
//importing images from houese 2
import secondNewImg1 from '../../assets/images/Buy/house2/img1.webp';
import secondNewImg2 from '../../assets/images/Buy/house2/img2.webp';
import secondNewImg3 from '../../assets/images/Buy/house2/img3.webp';
import secondNewImg4 from '../../assets/images/Buy/house2/inside6.webp';
import secondNewImg5 from '../../assets/images/Buy/house2/inside7.webp';
import sInside1 from '../../assets/images/Buy/house2/inside1.webp';
import sInside2 from '../../assets/images/Buy/house2/inside2.webp';
import sInside3 from '../../assets/images/Buy/house2/inside3.webp';
import sInside4 from '../../assets/images/Buy/house2/inside4.webp';
import sInside5 from '../../assets/images/Buy/house2/inside5.webp';
//Importing images from house 3
import thirdNewImg1 from '../../assets/images/Buy/house3/img1.webp';
import thirdNewImg2 from '../../assets/images/Buy/house3/img2.webp';
import thirdNewImg3 from '../../assets/images/Buy/house3/img3.webp';
import thirdNewImg4 from '../../assets/images/Buy/house3/inside6.webp';
import thirdNewImg5 from '../../assets/images/Buy/house3/inside7.webp';
import tInside1 from '../../assets/images/Buy/house3/inside1.webp';
import tInside2 from '../../assets/images/Buy/house3/inside2.webp';
import tInside3 from '../../assets/images/Buy/house3/inside3.webp';
import tInside4 from '../../assets/images/Buy/house3/inside4.webp';
import tInside5 from '../../assets/images/Buy/house3/inside5.webp';
//importing images from renting house 1
import fourtNewImg1 from '../../assets/images/Rent/rent1/img1.webp';
import fourtNewImg2 from '../../assets/images/Rent/rent1/img2.webp';
import fourtNewImg3 from '../../assets/images/Rent/rent1/img3.webp';
import fourtNewImg4 from '../../assets/images/Rent/rent1/img4.webp';
import fourtNewImg5 from '../../assets/images/Rent/rent1/img5.webp';
import fourtNewImg6 from '../../assets/images/Rent/rent1/img6.webp';
//importing images from renting house 2
import fiftNewImg1 from '../../assets/images/Rent/rent2/img1.webp';
import fiftNewImg2 from '../../assets/images/Rent/rent2/img2.webp';
import fiftNewImg3 from '../../assets/images/Rent/rent2/img3.webp';
import fiftNewImg4 from '../../assets/images/Rent/rent2/img4.webp';
import fiftNewImg5 from '../../assets/images/Rent/rent2/img5.webp';
import fiftNewImg6 from '../../assets/images/Rent/rent2/img6.webp';
//importing images from renting house 3
import sixtNewImg1 from '../../assets/images/Rent/rent3/img1.webp';
import sixtNewImg2 from '../../assets/images/Rent/rent3/img2.webp';
import sixtNewImg3 from '../../assets/images/Rent/rent3/img3.webp';
import sixtNewImg4 from '../../assets/images/Rent/rent3/img4.webp';
import sixtNewImg5 from '../../assets/images/Rent/rent3/img5.webp';
import sixtNewImg6 from '../../assets/images/Rent/rent3/img6.webp';


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

    },
    {
        location: 'Bannana',
        amount: '$500,000',
        bed: '6 Bed',
        bath: '6 Bath',
        park: '3 Park',
        kitchen: '4 Kitchen',
        frontPic: secondNewImg1,
        fullDescr: '',
        pictures: [secondNewImg1, secondNewImg2, secondNewImg3, secondNewImg4, secondNewImg5, sInside1, sInside2, sInside3, sInside4, sInside5],

    },
    {
        location: 'Bannana',
        amount: '$500,000',
        bed: '6 Bed',
        bath: '6 Bath',
        park: '3 Park',
        kitchen: '4 Kitchen',
        frontPic: thirdNewImg1,
        fullDescr: '',
        pictures: [thirdNewImg1, thirdNewImg2, thirdNewImg3, thirdNewImg4, thirdNewImg5, tInside1, tInside2, tInside3, tInside4, tInside5],

    },
    {
        location: 'Bannana',
        amount: '$500,000',
        bed: '6 Bed',
        bath: '6 Bath',
        park: '3 Park',
        kitchen: '4 Kitchen',
        frontPic: fourtNewImg1,
        fullDescr: '',
        pictures: [fourtNewImg1, fourtNewImg2, fourtNewImg3, fourtNewImg4, fourtNewImg5, fourtNewImg6],

    },
    {
        location: 'Bannana',
        amount: '$500,000',
        bed: '6 Bed',
        bath: '6 Bath',
        park: '3 Park',
        kitchen: '4 Kitchen',
        frontPic: fiftNewImg1,
        fullDescr: '',
        pictures: [fiftNewImg1, fiftNewImg2, fiftNewImg3, fiftNewImg4, fiftNewImg5, fiftNewImg6],

    },
    {
        location: 'Bannana',
        amount: '$500,000',
        bed: '6 Bed',
        bath: '6 Bath',
        park: '3 Park',
        kitchen: '4 Kitchen',
        frontPic: sixtNewImg1,
        fullDescr: '',
        pictures: [sixtNewImg1, sixtNewImg2, sixtNewImg3, sixtNewImg4, sixtNewImg5, sixtNewImg6],

    },

]



export const NewListing = () => {
    return(
        <div className="px-[20px] py-[100px]">
           <div className="bg-white gap-5 grid grid-col-1 justify-center md:grid-cols-3">
            {
                Listed.map(listing => {
                    return(
                        <div className="shadow-2xl max-w-[400px] relative rounded  ">
                        <div className=" " ><img src={listing.frontPic} alt="" className="rounded-t w-full md:h-[300px] " /></div>
                         <div className=" flex flex-col rounded-b  bg-white bottom-0 w-full gap-1">
                             <div className="flex flex-row px-2 py-1 justify-between">
                                 <div className="flex flex-row gap-1 items-center ">
                                     <HiLocationMarker className="text-[20px] text-green-500"/>
                                     <p className="text-[17px] font-bold text-slate-900  capitalize ">{listing.location} </p>
                                 </div>
                                 <div className="flex  flex-row gap-1 items-center ">
                                     <FaMoneyCheckAlt className="text-[20px] text-green-500"/>
                                     <p className="text-[20px] text-slate-900 font-bold  ">{listing.amount}</p>
                                 </div>
                                 </div>
                                 <div className="flex px-2 flex-row gap-[40px] justify-between items-center ">
                                    <p className="text-[11px] md:text-[15px] font-bold flex flex-row gap items-center  text-slate-900 "><FaBed className="text-[11px] md:text-[15px] font-bold text-slate-500"/>{listing.bed}</p>
                                    <p className="text-[11px] md:text-[15px] font-bold flex flex-row gap items-center  text-slate-900 "> <FaBath className="text-[11px] md:text-[15px] font-bold text-slate-700"/>{listing.bath}</p>
                                    <p className="text-[11px] md:text-[15px] font-bold flex flex-row gap items-center  text-slate-900 "><AiTwotoneCar className="text-[11px] md:text-[15px] font-bold text-slate-500"/>{listing.park}</p>
                                    <p className="text-[11px] md:text-[15px] font-bold flex flex-row gap items-center  text-slate-900 "><MdSoupKitchen className="text-[12px] md:text-[15px] font-bold text-slate-500"/>{listing.kitchen}</p>
                                 </div>
                                 <Link className="bg-slate-900 hover:bg-slate-700 rounded-b text-center text-slate-50 text-[15px] py-[10px] uppercase font-bold">View Property</Link>
                             </div>
                         </div>
                       
                    )
                })
            }
             </div>
           </div>
    )
}