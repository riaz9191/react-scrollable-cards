import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { FaCalendarDay, FaCalendarAlt } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import Post_card from "./Post_card";
const UnderReview = () => {
  return (
    <div className="card w-96 p-4  rounded-lg shadow-md">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center mb-4">
          <div className=" p-4 rounded-tl-2xl rounded-bl-2xl"></div>
          <h2 className="font-bold">Under Review</h2>
        </div>
        <p className="bg-[#E8EEF3] rounded-lg p-2 px-3 ">0</p>
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

export default UnderReview;
