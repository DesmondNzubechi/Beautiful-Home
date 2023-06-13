import React from "react";
import { TbTruckDelivery } from 'react-icons/tb';
import {MdChair} from 'react-icons/md';
import { MdPayments } from 'react-icons/md';
import sellImg from '../../assets/images/forsale.avif';
import buyImg from '../../assets/images/buying.avif';
import rentImg from '../../assets/images/renting.avif';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export const WhyChooseUs = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
     }, []);
    return(
        <div className=" py-[50px] left-0 right-0  p-2 rounded bg-transparent  flex flex-row justify-center px-[20px] ">
            <div className="flex flex-col md:flex-row gap-[30px] justify-center">
            <div data-aos='zoom-in-up' className="max-w-[350px] bg-white shadow-2xl flex flex-col justify-center items-center gap-2 rounded-lg text-center  p-5 ">
              <div className="max-w-[150px]"><img src={sellImg} alt="" /></div>
                <h1 className="font-myfont capitalize text-[23px] md:text-[27px] ">Buy a Home</h1>
                <p className="font-fonty text-[15px] md:text-[17px] ">Find your  dream homw with an amazing photo experience and the most listings and this include things that you won't find anywhere.</p>
            </div>
            <div data-aos='zoom-in-up'  className="max-w-[350px] bg-white  shadow-2xl flex flex-col justify-center items-center gap-2 rounded-lg text-center  p-5 ">
            <div className="max-w-[150px]"><img src={rentImg} alt="" /></div>
                <h1 className="font-myfont capitalize text-[23px] md:text-[27px] ">Rent a home</h1>
                <p className="font-fonty text-[15px] md:text-[17px] ">We have created seamless online experience. You can find all kinds of house that is available for renting at the affordable price.</p>
            </div>
            <div data-aos='zoom-in-up' className="max-w-[350px]  bg-white shadow-2xl flex flex-col justify-center items-center gap-2 rounded-lg text-center  p-5 ">
            <div  className="max-w-[150px]"><img src={buyImg} alt="" /></div>
                <h1 className="font-myfont capitalize text-[23px] md:text-[27px] ">Sell a home</h1>
                <p className="font-fonty text-[15px] md:text-[17px] ">We have made selling of home easy for those that wish to sell their home. With our agents and workers is now easier .</p>

            </div>
            </div>
        </div>
    )
}