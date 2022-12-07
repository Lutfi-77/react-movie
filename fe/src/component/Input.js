import React from "react";

function Input({
  type = "text",
  name,
  className,
  value,
  placeholder,
  readOnly,
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        className={className}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </div>
  );
}

export default Input;
