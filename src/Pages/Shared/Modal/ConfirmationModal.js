import React from "react";

const ConfirmationModal = ({title, message,modalData, successAction,btnName }) => {
  return (
    <div>
      <input type="checkbox" id="confirmation_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="confirmation_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <label onClick={()=>successAction(modalData)}
            htmlFor="confirmation_modal"
            className="btn absolute right-2 bottom-2"
          >
            {btnName}
          </label>

          <h3 className="text-lg font-bold">
            {title}
          </h3>
          <p className="py-4">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
