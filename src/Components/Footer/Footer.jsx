import {React, useEffect} from "react";
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail, AiFillLinkedin, AiFillInstagram, AiOutlineGithub, AiTwotoneHeart } from 'react-icons/ai';
import { FiPhoneCall, FiExternalLink } from 'react-icons/fi';
import { RiWhatsappFill } from 'react-icons/ri';
import { TfiWorld } from 'react-icons/tfi';
import { BsTwitter } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import { Link } from "react-router-dom";
import logo from '../../assets/images/houseH.avif';

export const Footer = () => {
    return (
        <footer  className="bg-slate-900 p-5">
            <div className="flex flex-col items-start md:flex-row gap-2 justify-between">
            <div className="flex flex-col md:items-end md:flex-row gap-2">
              <div className=" rounded max-w-[150px] " >
              <img src={logo} alt="" className=" rounded " srcset="" />
              </div>
              <div>
         <p className="text-slate-200 text-wrap text-[12px] pt-[20px] max-w-[400px]">Building Your Dream is our expertise. With years of experience and a dedication to quality, we guide you through a seamless building process. From initial planning to final construction, we prioritize open communication, efficient timelines, and exceptional workmanship to deliver a home that exceeds your dreams.
             </p>
             </div>
         </div>
                <div className="flex flex-col gap-4">
       <h1 className="text-slate-100 font-bold text-[25px]">Contact</h1>
         <p className="flex flex-row items-center gap-3 "><span className="  rounded-full font-bold"><GoLocation className="text-[25px] text-slate-900 bg-slate-50 rounded-full p-1  "/></span> <span className="text-slate-300 text-[15px] ">Enugu, Nigeria</span></p>
         <p><a href="tel:+2347084183611" className="flex flex-row items-center gap-3 "><span className="  rounded-full text-slate-50 font-bold"><FiPhoneCall className="text-[25px] text-slate-900 bg-slate-50 rounded-full p-1  "/></span> <span className="text-slate-300 text-[15px] ">+234 708 4183 611</span></a></p>
         <p><a href="mailto:desmondnzubechukwu1@gmail.com" className="flex flex-row items-center gap-3 "><span className="  rounded-full font-bold"><AiOutlineMail className="text-[25px] text-slate-900 bg-slate-50 rounded-full p-1  "/></span> <span className="text-slate-300 text-[15px] ">homebuilder@gmail.com</span></a></p>
       </div>
{/*<div className="flex flex-col ga">
    <h1 className="text-slate-100 font-bold text-[25px]">Important Links</h1>
    <div className="flex flex-col gap-1">
<Link to='/' className="text-slate-300 text-[20px] flex flex-row items-center hover:text-slate-500 active:text-sky-500 gap-2"><BiLink /> Home</Link>
<Link to='/about' className="text-slate-300 text-[20px] flex flex-row items-center gap-2 hover:text-slate-500 active:text-sky-500"><BiLink /> About Us</Link>
<Link  to='/Contact' className="text-slate-300 text-[20px] flex flex-row items-center gap-2 hover:text-slate-500 active:text-sky-500"><BiLink />Contact Us</Link>
<Link  to='/products' className="text-slate-300 text-[20px] flex flex-row items-center gap-2 hover:text-slate-500 active:text-sky-500"><BiLink />Our Products</Link>
<Link  to='/service' className="text-slate-300 text-[20px] flex flex-row items-center gap-2 hover:text-slate-500 active:text-sky-500"><BiLink />Our Services</Link>
    </div>
    </div>*/}
      <div>
                <h1 className="text-20px font-semibold mt-[15px] mb-[10px] text-white">Connect with the developer</h1>
                <div className="flex flex-row gap-5 mb-[20px]">
                  <a href="https://www.linkedin.com/in/desmond.nzubechukwu-38895422" className="text-[20px] hover:bg-slate-200 shadow-xl p-1 bg-white text-slate-900 rounded-full"><AiFillLinkedin /></a> 
                  <a href="https://www.twitter.com/nzubechukwu101" className="text-[20px] shadow-xl p-1 bg-white text-slate-900 rounded-full"> < BsTwitter /></a>
                   <a href="https://wa.me/2347084183611?text=Hello,%20Nzubechukwu(B2R)%20My%20name%20is%20.....%20I%20got%20Your%20Contact%20From%20A%20Realestate%20Website%20that%20you%20built%20Homebuilder" className="text-[20px] shadow-xl p-1 bg-white text-slate-900 rounded-full"><RiWhatsappFill /></a>
               <a href="https://www.github.com/DesmondNzubechi" className="text-[20px] shadow-xl p-1 bg-white text-slate-900 rounded-full"><AiOutlineGithub /></a>
               <a href="https://nzubechukwu.com" className="text-[20px] shadow-xl p-1 bg-white text-slate-900 rounded-full"><FiExternalLink /></a>
                
                </div>
                </div>
<div>
</div>
       </div>
       <br />
       <hr />
      
          <div className="flex md:flex-row flex-col gap-3 items-center justify-around mt-[20px]">
       {    <p className="flex flex-row items-center gap-1 text-slate-400 text-[12] md:text-[18px]">Website built by <a className="uppercase font-bold text-slate-500 " href="https://nzubechukwu.com">Nzubechukwu</a> </p>}
            <p className="md:text-[20px] text-[15px] text-slate-50">&copy; Homebuilder 2023</p>
          </div>
        </footer>
    )
}