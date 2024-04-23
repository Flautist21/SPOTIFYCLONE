import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoLibrarySharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import Signup from "./Signup";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='w-1/4 fixed left=0 top=0 sidebar '>
      <div className="nav secondary_bg rounded-lg px-8 py-6">
        <div className="flex items-center gap-4">
          <IoHome className="font-bold text-xl" />
          <span>Home</span>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <FaSearch className="font-bold text-xl" />
          <span>Search</span>
        </div>
      </div>
      <div className="mt-2 nav secondary_bg rounded-lg px-2 py-2">
        <div className="flex px-4 justify-between mb-4 items-center gap-4 ">
          <div className='flex gap-2 items-center'>
            <IoLibrarySharp className="font-bold text-xl" />
            <span>Your Library</span>
          </div>
          <button className='hover:bg-black/25 rounded-[50%] p-2'><FaPlus className="font-bold text-xl" /></button>
        </div>
        <div className="your_library">
          <div className=" leading-8 mt-2 nav tertiary_bg rounded-lg px-4 py-6">
            <p className='font-bold'>Create your first Playlist.</p>
            <p className='font-semibold'>It's easy,we'll help you.</p>
            <button className="rounded-full mt-4 text-black px-4 py-0 bg-white font-semibold">
              Create Playlist
            </button>
          </div>
          <div className=" leading-8 mt-4 nav tertiary_bg rounded-lg px-4 py-6">
            <p className='font-bold'>Let's find some podcasts to follow</p>
            <p className='font-semibold'>We'll keep you updated on new episodes</p>
            <button className="rounded-full mt-4 text-black px-4 py-0 bg-white font-semibold">
              Browse Podcasts
            </button>
          </div>
        </div>

      </div>
      <div className="mt-4 px-4 flex flex-wrap gap-4 ">
        <a className='text-xs text-gray-300 mx-4' href="#">Legal</a>
        <a className='text-xs text-gray-300 mx-4' href="#">Privacy center</a>
        <a className='text-xs text-gray-300 mx-4' href="#">Privacy Policy</a>
        <a className='text-xs text-gray-300 mx-4' href="#">Cookies</a>
        <a className='text-xs text-gray-300 mx-4' href="#">About Ads</a>
        <a className='text-xs text-gray-300 mx-4' href="#">Accessiblity</a>

      </div>
      <button className="mx-4 mt-8 text-sm border-white border rounded-full flex gap-2 px-3 py-1 items-center">
        <TbWorld />
        <span className='text-white font-bold'>English</span>
      </button>
      <Signup />
    </div>

  )
}

export default Sidebar
