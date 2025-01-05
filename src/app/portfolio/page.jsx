import Image from "next/image";
import Link from "next/link";
import React from "react";
import illustratatin from "../../../public/images/illustration.png";
import websites from "../../../public/images/websites.jpg";
import apps from "../../../public/images/apps.jpg";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-2xl mb-4">Choose a gallery</h1>
      <div className="flex gap-12 ">
        <Link
          href="/portfolio/illustrations"
          className="border-4 border-[#bbb] rounded-md w-72 h-72 relative"
        >
          <Image src={illustratatin} alt="illustrations" fill></Image>
          <span className="absolute right-3 bottom-3  text-3xl font-bold">
            Illustrations
          </span>
        </Link>
        <Link
          href="/portfolio/websites"
          className="border-4 border-[#bbb] rounded-md w-72 h-72 relative"
        >
          <Image src={websites} alt="illustrations" fill></Image>
          <span className="absolute right-3 bottom-3 text-3xl font-bold">
            Websites
          </span>
        </Link>
        <Link
          href="/portfolio/applications"
          className="border-4 border-[#bbb] rounded-md w-72 h-72 relative"
        >
          <Image src={apps} alt="illustrations" fill></Image>
          <span className="absolute right-3 bottom-3  text-3xl font-bold">
            Applications
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
