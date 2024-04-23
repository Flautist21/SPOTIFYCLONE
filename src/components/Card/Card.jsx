import React from "react";
import "./Card.css";
import { FaPlay } from "react-icons/fa";
const Card = () => {
    return (
        <div className="card col-span-1 p-4 rounded-lg">
     <div className="relative">
     <img src="/assets/card.jpg" alt="" />
     <button className="flex items-center play_btn absolute bottom-0 right-0 rounded-[50%] bg-green-500 justify-center p-3">
         <FaPlay className="text-black text-xl"/>
     </button>
     </div>

     <h3 className="text-sm font-semibold my-2">Peaceful Piano</h3>
     <p className="text-xs text-gray-400 leading-4">
      Lorem ipsum dolor sit, amet consectetur harum nemo numquam?
     </p>
        </div>
    );
};

export default Card;
