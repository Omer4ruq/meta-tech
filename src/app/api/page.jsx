"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Registration = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log(name);
    try {
      const res = await fetch("api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/login?success=Account has been created");
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };
  return (
    <div className=" pt-20 pb-20">
      <div className="flex flex-col justify-center items-center  gap-5">
        <form
          action=""
          className="w-[300px] flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
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
        {err && "Something is Wrong"}
        <Link href="/login">Login with an existing account</Link>
      </div>
    </div>
  );
};

export default Registration;
