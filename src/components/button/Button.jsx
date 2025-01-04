import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="p-5 cursor-pointer bg-[#53c28b] border-none rounded w-max text-white">
        {title}
      </button>
    </div>
  );
};

export default Button;
