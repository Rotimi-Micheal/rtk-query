import React from "react";

const Label = ({ labelId, title }) => {
  return (
    <>
      <label className="w-full text-base" htmlFor={labelId}>
        {title}
      </label>
    </>
  );
};

export default Label;
