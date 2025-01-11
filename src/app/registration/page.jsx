import Link from "next/link";
import React from "react";

const Registration = () => {
  return (
    <div className=" pt-20 pb-20">
      <div className="flex flex-col justify-center items-center  gap-5">
        <form action="" className="w-[300px] flex flex-col gap-5">
          <input
            type="text"
            placeholder="username"
            required
            className="p-5 bg-transparent 
          outline-none text-[#bbb] border-2 border-[#bbb] text-2xl font-bold "
          />
          <input
            type="email"
            placeholder="email"
            className="p-5 bg-transparent 
          outline-none text-[#bbb] border-2 border-[#bbb] text-2xl font-bold"
            required
          />
          <input
            type="password"
            placeholder="password"
            className="p-5 bg-transparent 
          outline-none text-[#bbb] border-2 border-[#bbb] text-2xl font-bold"
            required
          />

          <button className="p-5 justify-center items-center cursor-pointer bg-[#53c28b] border-none rounded w-full text-white">
            Register
          </button>
        </form>
        <Link href="/login">Login with an existing account</Link>
      </div>
    </div>
  );
};

export default Registration;
