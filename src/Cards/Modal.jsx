import React from "react";
import "./Modal.css"; // Import your modal-specific CSS file

const Modal = ({ isOpen, onClose, attachments }) => {
  if (!isOpen) return null;
  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>Close</button>
        <ul>
          {attachments.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
