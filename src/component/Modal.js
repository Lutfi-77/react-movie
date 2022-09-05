import React from "react";

function Modal() {
  return (
    <div
      className={
        modal
          ? "bg-black-rgba fixed inset-0 z-20 flex items-center justify-center"
          : "bg-black-rgba fixed inset-0 z-20 flex items-center justify-center hidden"
      }
    >
      <div className="container w-full mx-auto text-center bg-white rounded-lg">
        test
      </div>
    </div>
  );
}

export default Modal;
