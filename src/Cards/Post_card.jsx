import React, { useState } from "react";
import { FaLayerGroup, FaCalendarDay, FaCalendarAlt } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import Modal from "./Modal";



const Post_card = () => {
  const [attachments, setAttachments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAttachment = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setAttachments(selectedFiles);
    setModalOpen(true);
  };
  return (
    <div className="bg-white post_card mt-3 rounded-md ">
      <div className="top name p-2">
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <div className="avatar w-6 h-6 rounded-full overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
                alt="Client Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xs font-bold">Client Name</h4>
          </div>
          <div className="flex gap-1 items-center">
            <div className="avatar w-6 h-6 rounded-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xs font-bold">Sadik Istiak</h4>
          </div>
        </div>
      </div>
      <div className="post-section flex justify-between pl-2 pr-2 py-1">
        <div className="flex items-center gap-2">
          <p>
            <FaLayerGroup />{" "}
          </p>
          <p className="text-xs">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 rounded-md px-1 py-2">
          <p className="text-base">
            <FaCalendarDay />{" "}
          </p>
          <p className="text-xs">1/2</p>
        </div>
      </div>
      <div className="last">
        <div className="img flex justify-between items-center p-2">
          <div className="flex gap-2 items-center">
            <div className="avatar w-5 h-5 rounded-full overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
                alt="Avatar 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="avatar w-5 h-5 rounded-full overflow-hidden">
              <img
                src="https://i.pinimg.com/originals/3a/db/f1/3adbf1ef7c4d02edf08d27765d6b5704.jpg"
                alt="Avatar 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2 bg-gray-100 rounded-3xl px-2 py-1">
              <p className="text-xs">12+</p>
            </div>
          </div>
          <div className="flex items-center gap-1 ">
            <FaRocketchat />
            <p className="text-xs">15</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <label className="attachment-label flex cursor-pointer">
              <GrAttachment className="attachment-icon" />
              <p className="text-xs">25</p>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleAttachment}
                multiple
              />
            </label>
          </div>
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            attachments={attachments}
          />

          <div className="flex items-center">
            <FaCalendarAlt />
            <p className="text-xs">30-12-2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Post_card;

