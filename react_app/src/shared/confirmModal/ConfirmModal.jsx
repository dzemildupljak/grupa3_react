import React from "react";
import "./ConfirmModal.css";

export default function ConfirmModal({ closeModal, confirmModal, children }) {
  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => closeModal(false)}>
            &times;
          </span>
          {children}
          <div className="modalBtns">
            {confirmModal && (
              <button
                className="btnYes"
                onClick={() => {
                  if (confirmModal) {
                    confirmModal();
                  }
                  closeModal(false);
                }}
              >
                Yes
              </button>
            )}
            <button className="btnNo" onClick={() => closeModal(false)}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
