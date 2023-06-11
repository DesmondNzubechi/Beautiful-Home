import React from "react";
import bgImg from '../../assets/images/houseH.avif';
import { Link } from "react-router-dom";




export const Sell = () => {
    return(
        <div className="min-h-[100vh]">

                 
        <div
    style={{ backgroundImage: `url(${bgImg})` }}
  className={`min-h-[50vh] relative after:left-0 after:right-0 after:absolute after:top-0 after:h-full bg-center flex items-center after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
    <div className="relative z-[1] py-[50px] max-w-[700px]">
    <h1 className="font-bold text-slate-50 text-[50px] ">Sell Home</h1>
<p className="text-slate-200 font-fonty text-[17px] ">Trust Homebuilder for a seamless home selling experience. Our experts understand the local market, optimizing your listing price for maximum returns. We enhance your home's appeal, captivating buyers with stunning visuals and strategic staging. From marketing to negotiations, we handle it all. Sell your home with confidence and ease. Partner with Homebuilder today!</p>
    </div>

  </div>
            <div>

            </div>

            <div  className="   flex items-center justify-around flex-col lg:flex-row px-[30px] py-[100px] lg:min-h-[100vh] from-slate-50 bg-white rounded-t-[50px] gap-5 to-slate-50">
        <div data-aos='fade-up' aos-data-duration='2000' className="max-w-[700px] flex flex-col gap-3 ">
            <h1 className="uppercase font-bold text-[20px] text-slate-900">Sell with a partner agent or get a cash offer</h1>
            <p className="text-slate-700 font-fonty  text-[15px] md:text-[20px] "><strong>HomeBuilder</strong>helps you sell your home, your way. Easily explore your selling options below and get personalized market value estimates — we can even help you choose the best option when you’re ready. </p>
<p className="text-slate-700 font-fonty  text-[15px] md:text-[20px] ">List your home with a <strong>HomeBuilder</strong> partner agent to get local expertise and potentially maximize your sales price.</p>
<p>Get an all-cash offer from our trusted partner, Opendoor, to sell your home faster and avoid the
hassle of showings.*</p>
            <Link to='/contact' className="bg-slate-900 w-fit px-5 p-2 text-slate-50 rounded shadow-2xl hover:bg-pink-500 text-[20px]">Contact Us</Link>
        </div>
        <div  className="max-w-[600px]">
            <img  data-aos='fade-up' aos-data-duration='2000' src={bgImg} alt="" className="rounded-[20px]" />
        </div>
        </div>
    
        </div>
    )
}