import Link from "next/link";
import React from "react";

const Navbar = () => {
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
  return (
    <div className="flex justify-between items-center h-20">
      <div>
        <Link href="/" className="font-bold text-base">
          Meta-Tech
        </Link>
      </div>
      <div className="flex gap-4 items-center">
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
      <div>
        <button className="p-1 border-none bg-[#53c28b] text-white cursor-pointer rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
