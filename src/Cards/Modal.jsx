import React from "react";

const Modal = ({ isOpen, onClose, attachments }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-md shadow-md max-w-3xl max-h-3/4 overflow-y-auto relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Files You Have Added</h2>
        </div>
        <ul>
          {attachments.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
        
        <button
          className=" bottom-4 right-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-gray-700 text-lg cursor-pointer transition-colors duration-300 mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
