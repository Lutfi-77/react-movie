import React from "react";

function Button({ className, text, onClick }) {
  return (
    <button
      className={`py-2 px-10 rounded-md text-sm ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
