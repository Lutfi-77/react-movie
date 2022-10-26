import React from "react";

function Button({ style, text, closeModal }) {
  return (
    <button
      className={`py-2 px-10 rounded-md text-sm ${style}`}
      onClick={closeModal}
    >
      {text}
    </button>
  );
}

export default Button;
