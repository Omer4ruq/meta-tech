"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import Logout from "../logout/Logout";
import { auth } from "@/auth/auth";
import { useSession } from "next-auth/react";

import LoginRegisterButton from "../login-register-btn/LoginRegisterButton";

const Navbar = () => {
  const session = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  function handleSidebar() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex justify-between items-center h-20">
      <div>
        <Link href="/" className="font-bold text-base">
          Meta-Tech
        </Link>
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <DarkModeToggle></DarkModeToggle>
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="flex items-center gap-4"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="hidden md:block">
        {session.user ? (
          <Logout></Logout>
        ) : (
          <div className="flex gap-4">
            <LoginRegisterButton title="Login" url="login" />
            <LoginRegisterButton title="Register" url="registration" />
          </div>
        )}
      </div>
      <div className="block md:hidden">
        <button onClick={handleSidebar}>
          {isOpen ? (
            <IoClose className="text-2xl font-bold" />
          ) : (
            <CiMenuFries className="text-2xl font-bold" />
          )}
        </button>
        <div
          className={`absolute top-20 left-0 w-full bg-white shadow-md flex flex-col 
            items-center gap-4 py-4 transition-transform duration-300 ${
              isOpen ? "" : "-translate-y-full"
            } md:hidden`}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-gray-700 hover:text-[#53c28b] transition-colors duration-200"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
