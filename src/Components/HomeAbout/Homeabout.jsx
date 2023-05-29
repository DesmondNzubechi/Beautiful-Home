import {React, useEffect} from "react";
import abtimg from '../../assets/images/heroImage/heroImg6.avif';
import { Link } from "react-router-dom";
/*import Aos from "aos";
import "aos/dist/aos.css";*/



export const AboutHome = () => {
    /*useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);*/

    return(
        <div  className="  mt-[850px] md:mt-[250px]  flex items-center justify-around flex-col md:flex-row px-[30px] py-[150px] lg:min-h-[100vh] from-slate-50 bg-white rounded-t-[50px] gap-5 to-slate-50">
        <div data-aos='fade-up' aos-data-duration='2000' className="max-w-[700px] flex flex-col gap-3 ">
            <h1 className="uppercase font-bold text-[30px] text-slate-900">About Us</h1>
            <p className="text-slate-700 font-fonty  text-[15px] md:text-[20px] ">Welcome to <strong>HomeBuilder</strong> , where dreams come to life and homes are crafted with passion and precision. As a premier real estate company, we take pride in our commitment to delivering exceptional properties that truly reflect the vision and aspirations of our clients. Whether you're looking for a custom-built masterpiece or a thoughtfully designed pre-built home, HomeBuilder is your trusted partner in turning your dream into a reality.</p>
           
            <Link to='/about' className="bg-slate-900 w-fit px-5 p-2 text-slate-50 rounded shadow-2xl hover:bg-pink-500 text-[20px]">Read More</Link>
        </div>
        <div  className="max-w-[600px]">
            <img  data-aos='fade-up' aos-data-duration='2000' src={abtimg} alt="" className="rounded-[20px]" />
        </div>
        </div>
    )
}