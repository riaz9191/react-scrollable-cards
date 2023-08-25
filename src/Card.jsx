import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { FaCalendarDay,FaCalendarAlt } from "react-icons/fa"; 
import { FaRocketchat } from "react-icons/fa6"; 
import { GrAttachment } from "react-icons/gr"; 
import Post_card from "./Cards/Post_card";
const Card = () => {
  return (
    <div className="card w-96 p-4  rounded-lg shadow-md">
      <div className="flex justify-between">
        <h2>Incomplete</h2>
        <p>0</p>
      </div>
      <div className="overflow-y-scroll max-h-screen w-80"> 
        <Post_card />
        <Post_card />
        <Post_card />
        <Post_card />
        <Post_card />
        <Post_card />
        <Post_card />
      </div>
    </div>
  );
};

export default Card;
