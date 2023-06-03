import React from "react";
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';
import {FcGoogle} from 'react-icons/fc';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HouseContext } from "../Context/HouseContext";


export const Login = () => {

    const {signin, inputs, setInputs, signInWithgoogleE} = useContext(HouseContext);

    return(
        <div className="py-[150px] px-[20px] ">
            <div className="flex flex-row justify-center">
             <div className="bg-slate-50 md:px-[70px]  flex flex-col  p-[20px] rounded shadow-2xl">
              <div>
                <h1 className="text-center text-[25px] capitalize    mb-3">Welcome back!</h1>
                <p className="flex items-center my-5 gap-x-2 text-[20px] bg-pink-500 p-2 capitalize text-white rounded-[2px] font-[300]"><FcGoogle/> connect with your google accout </p>
                <p className="text-center capitalize mb-[20px] text-slate-900 text-[20px]">Or login with email</p>
              </div>
                <form action="" className="flex  flex-col gap-5">
                    <div className="flex flex-col items-start">
                        <label htmlFor="email" className="flex items-center text-slate-900 text-[15px]"><AiOutlineMail/>Email</label>
                        <input onChange={(e) => setInputs({...inputs, email: e.target.value})} value={inputs.email} type="email" placeholder="nzubechukwu@gmail.com"  className="p-3 shadow rounded w-full outline-0 "/>
                    </div>
                    <div>
                    <label htmlFor="password" className="flex items-center text-slate-900 text-[15px] "><RiLockPasswordFill/>Password</label>
                        <input onChange={(e) => setInputs({...inputs, password: e.target.value})} value={inputs.password} type="password" placeholder="******"  className="p-3 rounded outline-0 w-full shadow "/>
                    </div>
                  <button type="button" onClick={signin} className="bg-green-500 rounded text-[17px] font-semibold p-3">Login</button>
                  <p className="text-center text-[17px] ">Don't have account yet? <Link to='/signup' className="text-pink-500 font-semibold">Sign Up</Link></p>
                </form>
             </div>
            </div>
        </div>
    )
}