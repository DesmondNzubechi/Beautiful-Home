import {React, useEffect} from "react";
import abtimg from '../../assets/images/heroImage/heroImg4.avif';
import { Link } from "react-router-dom";
/*import Aos from "aos";
import "aos/dist/aos.css";*/



export const FullAbout = () => {
    /*useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);*/

    return(
        <div  className=" min-h-[100vh]  flex items-center justify-around flex-col lg:flex-row px-[30px] py-[150px] lg:min-h-[100vh] from-slate-50 bg-white rounded-t-[50px] gap-5 to-slate-50">
        <div data-aos='fade-up' aos-data-duration='2000' className="max-w-[700px] flex flex-col gap-3 ">
            <h1 className="uppercase font-bold text-[30px] text-slate-900">About Us</h1>
            <p className="text-slate-700 font-fonty  text-[15px] md:text-[15px] ">At <strong>HomeBuilder</strong>, we are committed to bringing your dream home to life with exquisite craftsmanship and personalized service. With a deep understanding that your home is a reflection of your unique lifestyle and a sanctuary for you and your loved ones, we strive to exceed your expectations every step of the way.</p>
            
            <p className="text-slate-700 font-fonty  text-[15px] md:text-[15px] ">Building Your Dream is our expertise. With years of experience and a dedication to quality, we guide you through a seamless building process. From initial planning to final construction, we prioritize open communication, efficient timelines, and exceptional workmanship to deliver a home that exceeds your dreams.</p>
            <p className="text-slate-700 font-fonty  text-[15px] md:text-[15px] ">Uncompromising Quality is our hallmark. We source the finest materials and collaborate with trusted suppliers to ensure that your home is built to the highest standards of craftsmanship and durability. Our attention to detail guarantees a residence that stands the test of time.</p>
            <p className="text-slate-700 font-fonty  text-[15px] md:text-[15px] ">Personalized Service is our commitment. We believe in building lasting relationships with our clients. Our team provides attentive, tailored assistance throughout the entire journey, ensuring your complete satisfaction and peace of mind.</p>
            <p className="text-slate-700 font-fonty  text-[15px] md:text-[15px] ">
            Discover Your Dream Home with HomeBuilder. Explore our portfolio of exceptional residences, thoughtfully designed and meticulously crafted. Let us be your partner in turning your vision into a place where memories are made and cherished. Contact HomeBuilder today, and together, let's build the home you've always dreamed of.
            </p>
            <Link to='/buy' className="bg-slate-900 w-fit px-5 p-2 text-slate-50 rounded shadow-2xl hover:bg-pink-500 text-[15px]">Explore</Link>
        </div>
        <div  className="max-w-[600px]">
            <img  data-aos='fade-up' aos-data-duration='2000' src={abtimg} alt="" className="rounded-[20px]" />
        </div>
        </div>
    )
}