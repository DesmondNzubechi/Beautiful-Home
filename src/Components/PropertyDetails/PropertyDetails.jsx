import React, { useState } from "react";
import newPic from '../../assets/images/Buy/house6/img1.webp';
import {GrNext, GrPrevious} from 'react-icons/gr'
import { useContext } from "react";
import { HouseContext } from "../Context/HouseContext";
import {FaBed, FaBath, FaMoneyCheckAlt, FaCar} from 'react-icons/fa';
import {AiTwotoneCar} from 'react-icons/ai';
import { MdKitchen, MdMoney, MdSoupKitchen } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';

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
    const hidetourForm = () => {
      setForm({
         tourForm : 'top-[-1000px]',
         agentForm : 'top-[-1000px]',
       });
    }
    return(
        <div>
            {houseFeatures.map(housing => {

      return <div className="grid pt-[150px] items-start gap-5 px-[20px] py-[50px] grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-start relative gap-1">
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
      <div>
      <div className="flex    flex-row">   
      <ul className="flex flex-col gap-y-3 items-start ">
      <li className="grid grid-cols-2 gap-x-[60px] gap-y-2">
        <li className="flex flex-row gap-x-2  items-center text-[17px] md:text-[20px] font-semibold uppercase"> <HiLocationMarker className="text-green-500"/> Bannana Ireland</li>
        <li className="flex flex-row gap-x-2  items-center text-[17px] md:text-[20px] font-semibold uppercase"><FaMoneyCheckAlt className="text-green-500"/> $500, 000</li>
       
        <li className="flex flex-row gap-x-2  items-center text-[17px] md:text-[20px] font-semibold "><FaBed className="text-green-500"/> 6bedroom Flat</li>
        <li className="flex flex-row gap-x-2  items-center text-[17px] md:text-[20px] font-semibold "><FaBath className="text-green-500"/> 6Bathroom</li>
        <li className="flex flex-row gap-x-2  items-center text-[17px] md:text-[20px] font-semibold "><MdKitchen className="text-green-500"/> 2Kitchen</li>
        <li className="flex flex-row gap-x-2  items-center text-[17px] ] font-semibold "><FaCar className="text-green-500"/> 2Car Park</li>
        </li>
      </ul>
      </div>
      <div className="my-[20px] ">
        <h1 className="uppercase font-bold text-[20px]  md:text-[20px]">Description:</h1>
        <p className="text-slate-700 font-[400] text-[16px] ">Introducing a remarkable home for sale that encompasses a host of impressive features. Step inside to discover an open-concept layout, providing seamless flow between living spaces. The gourmet kitchen showcases top-of-the-line appliances, sleek countertops, and ample storage. Relaxation awaits in the luxurious master suite, featuring a spa-like ensuite bathroom. Outside, a meticulously landscaped backyard offers a serene oasis, complete with a covered patio for outdoor gatherings. Conveniently located near amenities, this property presents a unique opportunity to own a truly exceptional home in a sought-after neighborhood. Schedule a private tour today and experience the epitome of modern living.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        <button onClick={viewAgentForm} className="bg-green-500 rounded px-3  py-2 text-[15px] text-slate-50 font-semibold   ">Contact Agent</button>
        <button onClick={viewtourForm} className="bg-slate-900 rounded px-3  py-2 text-[15px] text-slate-50 font-semibold   ">Request A Tour</button>
        <button className="bg-slate-50 rounded px-3  py-2 text-[15px] text-slate-900 font-semibold border   ">Ask Question</button>
      </div>
        </div>
        </div>
          })}
        <div className="flex justify-center gap-5 p-[20px] py-[50px] flex-row">
          <div onClick={(e) => {e.target.tagName !== 'form'? setForm({...form, agentForm: 'top-[-200px]'}): form}} className={`fixed ${form.agentForm}  w-full h-full flex justify-center z-[10] p-[50px] bg-Tp`}>
         <form action="" className="bg-pink-700 rounded flex flex-col gap-4 p-[50px]">
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
        </div>
        <div className={`fixed ${form.tourForm} w-full overflow-y-auto  h-full flex justify-center z-[10] p-[50px] bg-Tp`}>
        <form action="" className="bg-pink-700 overflow-y-auto rounded flex flex-col gap-4 p-[50px]">
            <h1 className="text-[20px] font-bold uppercase text-slate-100 ">Request a tour</h1>
            <div className="flex flex-col">
                <label htmlFor="name" className="text-slate-900 font-[400] text-[20px]">Date:</label>
                <input type="date" className="border outline-0  p-2 rounded" placeholder="Nzubechukwu Desmond" />
            </div>
            <div className="flex flex-col">
                <label className="text-slate-900 font-[400] text-[20px]" htmlFor="Tel">Time:</label>
               <input type="time" className="border outline-0  p-2 rounded" name="" placeholder="+234 708 41823 611" id="" />
               <div className="flex flex-col">
                <label htmlFor="name" className="text-slate-900 font-[400] text-[20px]">Name:</label>
                <input type="text" className="border outline-0  p-2 rounded" placeholder="Nzubechukwu Desmond" />
            </div>
            <div className="flex flex-col">
                <label className="text-slate-900 font-[400] text-[20px]" htmlFor="Tel">Phone:</label>
                <input type="tel" className="border outline-0  p-2 rounded" name="" placeholder="+234 708 41823 611" id="" />
                </div>

               <div className="flex flex-col">
                <label className="text-slate-900 font-[400] text-[20px]" htmlFor="email">Email:</label>
                <input type="email" className="border outline-0  p-2 rounded" placeholder="nzubechukwu1@gmail.com" />
            </div>
            <div className="flex flex-col">
      
                <button className="bg-slate-900 text-slate-50 p-2 my-[20px] rounded text-[20px] capitalize">Submit Request</button>
            </div>
            </div>
        </form>
        </div>
         </div>
        </div>
    )
}