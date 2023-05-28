import React from "react";
import heroImg from '../../assets/images/heroImage/heroimg2.avif';
import { NavLink } from "react-router-dom";
export const HeroSection = () => {
    return(
        <div className="pt-[150px] shadow flex rounded-b-[50px] flex-row justify-center px-[30px] pb-[100px] bg-slate-50 lg:min-h-[100vh] ">
            <div className="flex flex-col md:flex-row items-center gap-[50px] justify-around">
                <div className="flex flex-col gap-5 w-[400px] md:max-w-[700px]">
                    <h1 className="font-bold uppercase text-[20px] ">Welcome to HOME BUILDER.</h1>
                    <p className="md:text-[20px] text-[20px] capitalize ">Discover your dream home with HOME BUILDER Your Gateway to Exceptional Properties. We are your trusted partner in the exciting journey of finding the perfect place to call your own</p>
                    <div className="flex flex-row gap-2 ">
                        <NavLink className='bg-slate-900 px-3 py-1 text-slate-50 rounded-[2px] text-[20px] shadow-2xl  '>Explore</NavLink>
                        <NavLink className='bg-pink-500 px-3 py-1  rounded-[2px] text-[20px] shadow-2xl text-white '>Learn More</NavLink>
                    </div>
                   
                </div>
                <div>
<img src={heroImg} alt="" className="rounded-[50px]"/>
                    </div>
            </div>
        </div>
    )
}