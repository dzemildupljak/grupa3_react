import React from "react";
import "./ConfirmModal.css";

export default function ConfirmModal({ closeModal, confirmModal }) {
  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <p>Da li ste sigurno da hocete da izbirsete usera..</p>
          <div className="modalBtns">
            <button
              className="btnYes"
              onClick={() => {
                confirmModal();
              }}
            >
              Yes
            </button>
            <button className="btnNo" onClick={closeModal}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
