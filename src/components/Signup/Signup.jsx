import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
const months= ["January","February","March","April","May","June","July","August","September","October","November","December",];
const Signup=()=>{
    return(
        <>
        <div className="container py-8 bg-white">
        <div className="logo text-center">
       <img src="/assets/s_logo_black.png" className="mx-auto" width={140} alt=""/>
   </div>
   <div className=" text-black">
    <div className="py-10 text-center w-1/2 mx-auto">
     <h1 className="text-3xl tracking-tighter my-4 font-semibold"> Sign up for free to start listening.</h1>
    <span className="or__">or</span>
    <p className="my-4 font-bold"> Sign up with your email address</p>
    <form className="text-center mx-auto w-3/4 ">
     <div className="w-4/5 mx-auto text-left py-4">
      <label htmlFor="email" className="font-semibold mb-2 text-sm inline-block" > What's your email?{" "}</label>
      <input id="email" type="text" name="email" placeholder="Enter your email" className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]" />
        </div>
        <div className="w-4/5 mx-auto text-left py-4">
            <label  htmlFor="email" className="font-semibold mb-2 text-sm inline-block"> Create a password{" "}</label>
            <input type="text" id="email" name="email" placeholder="Create a password" className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"/>
        </div>
        <div className="w-4/5 mx-auto text-left py-4">
            <label htmlFor="email" className="font-semibold mb-2 text-sm inline-block">What should we call you?{" "} </label>
            <input type="text" id="email" name="email" placeholder="Create a password" className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"/>
            <small>it will appear on your profile</small>
        </div>
        <div className="text-left"></div>
        <div className="w-4/5 mx-auto text-left py-4">
            <label htmlFor="password" className="font-semibold mb-2 text-sm inline-block" >What's your date of birth?</label>
            <div className="flex gap-8">
                <div className="w-1/4">
              <label htmlFor="password" className="ml-2 inline-block" > Day </label>
              <input type="text"  id="password"  name="password"  placeholder="DD"  className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"  />
                </div>
                <div className="w-2/4">
                    <label  htmlFor="password"  className="ml-2 inline-block">Month</label>
                <select type="radio"   id="password"  name="password"  placeholder="Password"  className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]">
                    {months.map((m) => {
                    return (
                       <option key={m} value={m}>
                           {m}
                       </option>
                        );
                    })}
                    </select>
                </div>
                <div className="w-1/4">
                    <label htmlFor="password" className="ml-2 inline-block" >Year</label>
                    <input type="text" id="password" name="password" placeholder="YYYY" className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]" />
                </div>
            </div>
            <div className="flex gap-8 mt-4">
                <div className="">
                    <input type="radio" id="password" name="password" placeholder="Password" className=""/>
                    <label htmlFor="password" className="ml-2 inline-block" > Male</label>
                </div>
                <div className="">
                    <input type="radio" id="password" name="password" placeholder="Password" className=""/>
                    <label htmlFor="password" className="ml-2 inline-block">Male</label>
                </div>
                <div className="">
                    <input type="radio" id="password" name="password" placeholder="Password" className="" />
                    <label htmlFor="password" className="ml-2 inline-block">Prefer not to say</label>
                </div>
            </div>
        </div>
        <div className="w-4/5 mx-auto text-left py-4">
        <div className="my-4 flex items-center gap-4" >
         <input type="checkbox" className="green-checkbox relative" name="" id="" />
            <p className="text-sm"> I would prefer not to receive marketing messages from Spotify</p>
            </div>
            <div className="my-4 flex items-center gap-4" >
                <input type="checkbox" className="green-checkbox relative" name="" id=""/>
                <p className="text-sm"> Share my registration data with Spotify's content providers for marketing purposes. </p>
            </div>
            <p className="my-4 text-xs">By clicking on sign-up, you agree to{" "} <Link to="/" className="text-green-400">Spotify's Terms and Condition </Link>{" "}of Use.
            </p>
            <p className="my-4 text-xs">
                To learn more about how Spotify collects,uses, shares and protects your personaldata,please see
                <Link to="/" className="text-green-400">Spotify's Privacy Policy.</Link>{" "}
            </p>
        </div>
        <div className="w-full text-left py-4">
            <input type="submit" value="Sign up" className="block cursor-pointer w-1/2 mx-auto outline-none bg-green-400 text-black p-3 hover:scale-105 translate-all duration-200 font-medium hover:font-semibold text-center rounded-full "/>
        </div>
           </form>
           <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
           <p className="pt-8">
               <span className="text-gray-300 font-semibold">Don't have an account?{" "}</span>
               <Link to="/login" className="text-green-400 hover:text-green-400/90 font-semibold underline mx-auto" >Log in</Link>
           </p>
       </div>
   </div>
            </div>
        </>
    );
};
export default Signup;
