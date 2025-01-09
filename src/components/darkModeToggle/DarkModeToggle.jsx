"use client";
import React, { useContext } from "react";
import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      className="w-12 h-6 border-2 border-[#53c28b70] 
  rounded-xl flex items-center justify-center p-1 relative cursor-pointer"
      onClick={toggle}
    >
      <IoIosMoon className="text-base text-[#b6f030]" />
      <IoIosSunny className="text-base text-[#b6f030]" />
      <FaCircle
        style={mode === "light" ? { left: "5px" } : { right: "5px" }}
        className="w-4 h-4 text-[#53c28b]  absolute text-lg"
      />
    </div>
  );
};

export default DarkModeToggle;
