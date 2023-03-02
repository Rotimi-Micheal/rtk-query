import React from "react";

const Input = ({ inputID, type, InputRef, placeholder }) => {
  return (
    <>
      <input
        className="border-4 border-black rounded-md w-full p-3"
        placeholder={placeholder}
        id={inputID}
        type={type}
        ref={InputRef}
      />
    </>
  );
};

export default Input;
