import React, { useEffect, useState } from "react";
import newPic from '../../assets/images/Buy/house6/img1.webp';
import {GrNext, GrPrevious} from 'react-icons/gr'
import { useContext } from "react";
import { HouseContext } from "../Context/HouseContext";
import {FaBed, FaBath, FaMoneyCheckAlt, FaCar} from 'react-icons/fa';
import {AiTwotoneCar} from 'react-icons/ai';
import { MdKitchen, MdMoney, MdSoupKitchen } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import  { HiOutlineBars3, HiXMark } from 'react-icons/hi2';
import Aos from "aos";

export const PropertyDetails = () => {
  const [form, setForm] = useState({
    tourForm : 'top-[-2000px]',
    agentForm : 'top-[-2000px]',
  })
    const { houseFeatures} = useContext(HouseContext);
    const [currentImg, setCurrentImg] = useState(0);
     let broadImg;
    let imgLength;
    
    houseFeatures.forEach(img => {
        imgLength = img.pictures.length;
        broadImg = img.pictures[currentImg];
    });
    const nextPic =() => {
       if (currentImg + 1 < imgLength) {
          setCurrentImg(currentImg + 1)
       } else {
        setCurrentImg(0);
       }
    };
    const prevPic = () => {
        if (currentImg > 0) {
            setCurrentImg(currentImg - 1);
        } else {
            setCurrentImg(imgLength - 1);
        }
    }
    const viewAgentForm = () => {
      setForm({
         tourForm : 'top-[-2000px]',
         agentForm : 'top-0',
       })
    }
    const viewtourForm = () => {
      setForm({
         tourForm : 'top-0',
         agentForm : 'top-[-2000px]',
       })
    }
    const hideAgentForm = () => {
      setForm({
         tourForm : 'top-[-2000px]',
         agentForm : 'top-[-2000px]',
       })
    }
    const hideTourForm = () => {
      setForm({
         tourForm : 'top-[-1000px]',
         agentForm : 'top-[-1000px]',
       });
    }
    useEffect(() => {
      Aos.init({duration: 2000});
    })
    return(
        <div>
            {houseFeatures.map(housing => {

      return <div className="grid pt-[150px] items-start gap-5 px-[20px] py-[50px] grid-cols-1 md:grid-cols-2">
      <div data-aos='fade-up' className="flex flex-col items-start relative gap-1">
        <div className="flex items-center flex-row w-full ">
        <GrPrevious onClick={prevPic} className="absolute left-1 text-slate-50 hover:bg-pink-500 font-bold bg-white p-1   text-[30px]"/>
        <img src={broadImg} alt=""  className="w-full"/>
        <GrNext onClick={nextPic} className="absolute right-1 text-slate-50 hover:bg-pink-500 font-bold bg-white p-1   text-[30px]"/>
        </div>
     <div className=" overflow-x-auto flex justify-center flex-row gap-1">
       
      {housing.pictures.map((pics, picsIndex) => {
        return  <img  src={pics} onClick={() => setCurrentImg(picsIndex)} className="w-[80px] hover:border hover:border-slate-700 active:border-2 hover:rounded " alt="" />
      })}
     </div>
      </div>
      <div >
      <div data-aos='fade-up' className="flex    flex-row">   
      <ul className="flex flex-col gap-y-3 items-start ">
      <li className="grid grid-cols-2 gap-x-[60px] gap-y-2">
        <li className="flex flex-row gap-x-2 text-slate-900 items-center text-[15px] md:text-[20px] font-semibold uppercase"> <HiLocationMarker className="text-green-500"/> {housing.location}</li>
        <li className="flex flex-row gap-x-2  items-center text-[15px] md:text-[20px] font-semibold uppercase"><FaMoneyCheckAlt className="text-green-500"/> {housing.amount}</li>
       
        <li className="flex flex-row gap-x-2  items-center text-[15px] md:text-[20px] font-semibold "><FaBed className="text-green-500"/>{housing.bed}</li>
        <li className="flex flex-row gap-x-2  items-center text-[15px] md:text-[20px] font-semibold "><FaBath className="text-green-500"/>{housing.bath}</li>
        <li className="flex flex-row gap-x-2  items-center text-[15px] md:text-[20px] font-semibold "><MdKitchen className="text-green-500"/>{housing.kitchen}</li>
        <li className="flex flex-row gap-x-2  items-center text-[15px] ] font-semibold "><FaCar className="text-green-500"/>{housing.park}</li>
        </li>
      </ul>
      </div>
      <div data-aos='fade-up' className="my-[20px] ">
        <h1 className="uppercase font-bold text-[20px]  md:text-[20px]">Description:</h1>
       {housing.fullDescr === ''? <p className="text-slate-700 font-[400] text-[16px] "> Introducing a remarkable home for sale that encompasses a host of impressive features. Step inside to discover an open-concept layout, providing seamless flow between living spaces. The gourmet kitchen showcases top-of-the-line appliances, sleek countertops, and ample storage. Relaxation awaits in the luxurious master suite, featuring a spa-like ensuite bathroom. Outside, a meticulously landscaped backyard offers a serene oasis, complete with a covered patio for outdoor gatherings. Conveniently located near amenities, this property presents a unique opportunity to own a truly exceptional home in a sought-after neighborhood. Schedule a private tour today and experience the epitome of modern living.</p>
       :
       <p>{housing.fullDescr}</p>
       }
      </div>
      <div data-aos='fade-up' className="grid grid-cols-2 md:grid-cols-3 gap-5">
        <button onClick={viewAgentForm} className="bg-green-500 rounded px-3  py-2 text-[15px] text-slate-50 font-semibold   ">Contact Agent</button>
        <button onClick={viewtourForm} className="bg-slate-900 rounded px-3  py-2 text-[15px] text-slate-50 font-semibold   ">Request A Tour</button>
        {/*<button className="bg-slate-50 rounded px-3  py-2 text-[15px] text-slate-900 font-semibold border   ">Ask Question</button>*/}
      </div>
        </div>
        </div>
          })}
        <div className="flex justify-center gap-5 p-[20px] py-[50px] flex-row">
          <span onClick={(e) => {
            if (e.target.tagName === 'SPAN') {
              setForm({...form, agentForm: 'top-[-2000px]'})
            }
          }} className={`fixed ${form.agentForm}  w-full h-full flex justify-center z-[10] p-[50px] bg-Tp`}>
         <form  action="" className="bg-pink-700 relative rounded flex flex-col gap-4 p-[50px]">
          <HiXMark onClick={hideAgentForm} className="absolute top-0 right-0 text-slate-50 active:text-slate-900 text-[25px] font-bold "/>
            <h1 className="text-[20px] font-bold uppercase text-slate-100 ">Contact Agent</h1>
            <div className="flex flex-col">
                <label htmlFor="name" className="text-slate-900 font-[400] text-[20px]">Name:</label>
                <input type="text" className="border outline-0  p-2 rounded" placeholder="Nzubechukwu Desmond" />
            </div>
            <div className="flex flex-col">
                <label className="text-slate-900 font-[400] text-[20px]" htmlFor="Tel">Phone:</label>
               <input type="tel" className="border outline-0  p-2 rounded" name="" placeholder="+234 708 41823 611" id="" />
               <div className="flex flex-col">
                
                <label className="text-slate-900 font-[400] text-[20px]" htmlFor="email">Email:</label>
                <input type="email" className="border outline-0  p-2 rounded" placeholder="nzubechukwu1@gmail.com" />
            </div>
            <div className="flex flex-col">
                <label className="text-slate-900 font-[400] text-[20px]" htmlFor="message">Message</label>
                <textarea name="" className="border outline-0  p-2 rounded" id=""></textarea>
                <button className="bg-slate-900 text-slate-50 p-2 my-[20px] rounded text-[20px] capitalize">Send message</button>
            </div>
            </div>
        </form>
        </span>
        <span  onClick={(e) => {
            if (e.target.tagName === 'SPAN') {
              setForm({...form, tourForm: 'top-[-2000px]'})
            }
          }} className={`fixed ${form.tourForm} w-full overflow-y-auto  h-full flex justify-center z-[10] p-[50px] bg-Tp`}>
        <form action="" className="bg-slate-900 relative overflow-y-auto rounded flex flex-col gap-4 p-[50px]">
        <HiXMark onClick={hideTourForm} className="absolute top-0 right-0 text-slate-50 active:text-slate-900 text-[25px] font-bold "/>
            <h1 className="text-[20px] font-bold uppercase text-slate-100 ">Request a tour</h1>
            <div className="flex flex-col">
                <label htmlFor="name" className="text-slate-500 font-[400] text-[20px]">Date:</label>
                <input type="date" className="border outline-0  p-2 rounded" placeholder="Nzubechukwu Desmond" />
            </div>
            <div className="flex flex-col">
                <label className="text-slate-500 font-[400] text-[20px]" htmlFor="Tel">Time:</label>
               <input type="time" className="border outline-0  p-2 rounded" name="" placeholder="+234 708 41823 611" id="" />
               <div className="flex flex-col">
                <label htmlFor="name" className="text-slate-500 font-[400] text-[20px]">Name:</label>
                <input type="text" className="border outline-0  p-2 rounded" placeholder="Nzubechukwu Desmond" />
            </div>
            <div className="flex flex-col">
                <label className="text-slate-500 font-[400] text-[20px]" htmlFor="Tel">Phone:</label>
                <input type="tel" className="border outline-0  p-2 rounded" name="" placeholder="+234 708 41823 611" id="" />
                </div>

               <div className="flex flex-col">
                <label className="text-slate-500 font-[400] text-[20px]" htmlFor="email">Email:</label>
                <input type="email" className="border outline-0  p-2 rounded" placeholder="nzubechukwu1@gmail.com" />
            </div>
            <div className="flex flex-col">
      
                <button className="bg-slate-500 text-slate-50 p-2 my-[20px] rounded text-[15px]  uppercase font-bold">Submit Request</button>
            </div>
            </div>
        </form>
        </span>
         </div>
        </div>
    )
}