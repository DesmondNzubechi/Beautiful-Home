import React from "react";
import bgImg from '../../assets/images/houseH.avif';





export const Sell = () => {
    return(
        <div>

                 
        <div
    style={{ backgroundImage: `url(${bgImg})` }}
  className={`min-h-[50vh] relative after:left-0 after:right-0 after:absolute after:top-0 after:h-full bg-center flex items-center after:w-full after:bg-bgT pt-[50px]  px-[30px] bg-cover z-[1]  `}>
    <div className="relative z-[1] py-[50px] max-w-[700px]">
    <h1 className="font-bold text-slate-50 text-[50px] ">Sell Home</h1>
<p className="text-slate-200 font-fonty text-[17px] ">Rental properties are typically managed by landlords or property management companies, which means you don't have to worry about maintenance and repairs. If something goes wrong, such as a plumbing issue or a broken appliance, you can simply contact the landlord or property manager to have it fixed.</p>
    </div>

  </div>
            <div>

            </div>
        </div>
    )
}