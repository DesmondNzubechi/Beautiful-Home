import React, { useEffect } from "react";
import img from '../../assets/images/contact.avif';
import Aos from "aos";


export const Contact = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return(
        <div className="py-[70px] min-h-[100vh] overflow-x-hidden grid grid-cols-1 lg:grid-cols-2 gap-[20px] items-center px-[30px] pt-[150px] ">
            <form action="" method="post" className="flex flex-col gap-[20px]">
                    <div data-aos='fade-right'>
                        <h1 className="capitalize  font-semibold text-[20px] ">Get in touch with us</h1>
                    </div>
                    <div data-aos='fade-right' className="flex flex-col gap-[10px] ">
                    <div className="flex flex-col ">
                <label className="text-[20px] font-semibold" htmlFor="">Fullname:</label>
                <input placeholder="Input Name" className="border-pink-500 bg-pink-500 border-[2px] border rounded text-white placeholder:text-white outline-0 px-[20px] py-[5px] " type="text" name="email" id="" />
            </div>
                    <div className="flex flex-col ">
                <label className="text-[20px] font-semibold" htmlFor="">Email</label>
                <input placeholder="Input email" className="border-pink-500 bg-pink-500 border-[2px] border rounded text-white placeholder:text-white outline-0 px-[20px] py-[5px] " type="email" name="email" id="" />
            </div>
            <div className="flex flex-col ">
                <label className="text-[20px] font-semibold" htmlFor="">Message</label>
                <textarea placeholder="Write your message" className="border-pink-500 bg-pink-500 border-[2px] border rounded text-white placeholder:text-white h-[150px] outline-0 px-[20px] py-[5px] "  name="message" id="" />
            </div>
           
            <button className="bg-slate-900 py-[3px] w-fit px-[20px] rounded shadow-2xl text-white text-[25px] font-semibold " type="submit">Send Message</button>
                  </div>
          
                </form>
                <div data-aos='fade-left' className="  ">
                    <img src={img}  alt="" />
                </div>
        </div>
    )
}