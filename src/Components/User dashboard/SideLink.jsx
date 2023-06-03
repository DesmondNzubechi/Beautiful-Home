import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FcAbout} from 'react-icons/fc';
import {AiFillMessage, AiFillDashboard} from 'react-icons/ai';
import {FaSearch} from 'react-icons/fa';
import {MdBedroomParent} from 'react-icons/md';
import {BsFillHouseAddFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {GrNext, GrPrevious} from 'react-icons/gr';


export const SideLink = () => {

    const [sideLinks, setSideLinks] = useState({
        nextIc: true,
        prevIc: false
    })
     const [sideLinkState, setSideLinkState] = useState('hidden');
    return(
        <div className="fixed left-0 top-0 bottom-0   px-[10px]  md:px-[40px] h-full md:px-[70px] bg-slate-900">
            <div>
            <h1 className={`flex font-bold justify-center shadow-2xl  w-full left-0 text-center right-0 p-2  items-center text-[20px] text-white uppercase  `}><span className={`text-[20px] md:block ${sideLinkState} font-bold text-white   `}>Homebuilder</span>   <span className="flex ml-[10px] items-center "> {sideLinks.prevIc && <GrPrevious onClick={() => {
                setSideLinkState('hidden');
                setSideLinks({prevIc:false, nextIc:true })
            }} className={`bg-slate-400  p-1 rounded text-[20px]`}/>} <GrNext onClick={() => {
                setSideLinkState('flex');
                setSideLinks({nextIc:false, prevIc:true,  })
            }} className={`bg-slate-400  p-1 rounded text-[20px]`}/></span></h1>
                <ul className="flex flex-col pt-[100px] gap-[40px]">
                    <li ><Link className="flex-row   flex items-center gap-x-2  "> <AiFillDashboard className="text-slate-100 text-[30px] " />  <span className={`text-[20px] md:block ${sideLinkState} font-bold text-white   `}>Dashboard</span> </Link></li>
                    <li><Link className="flex-row flex items-center gap-x-2  "><BsFillHouseAddFill className="text-slate-100 text-[30px] "/><span className={`text-[20px] md:block ${sideLinkState} text-white   `}>Buy</span> </Link></li>
                    <li><Link className="flex-row flex items-center gap-x-2  "><MdBedroomParent className="text-slate-100 text-[30px] "/><span className={`text-[20px] md:block ${sideLinkState} text-white   `}>Rent</span>  </Link></li>
                    <li><Link className="flex-row flex items-center gap-x-2  "><FaSearch className="text-slate-100 text-[30px] "/><span className={`text-[20px] md:block ${sideLinkState} text-white   `}>Search</span> </Link></li>
                    <li><Link className="flex-row flex items-center gap-x-2  "><AiFillMessage className="text-slate-100 text-[30px] "/><span className={`text-[20px] md:block ${sideLinkState} text-white   `}>Contact</span> </Link></li>
                    <li><Link className="flex-row flex items-center gap-x-2  "> <FcAbout className="text-slate-100 text-[30px] "/><span className={`text-[20px] md:block ${sideLinkState} text-white   `}>About</span></Link></li>
                </ul>
            </div>
        </div>
    )
}