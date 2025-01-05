import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import aboutImage from "../../../public/images/about.jpg";

const About = () => {
  return (
    <div>
      <div>
        <div className="w-full h-[400px] relative grayscale">
          <Image
            src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="about image"
            fill
            className="object-cover "
          ></Image>
          <div className="absolute bg-[#53c28b] text-white p-2 font-bold mt-[320px] ml-4">
            <h1>Digital Storytellers</h1>
            <h2>Handcrafting award winning digital experiences</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-4 gap-10">
          <div>
            <h1 className="text-xl font-bold mb-8">Who Are We</h1>
            <p>
              At MetaTech, we are dreamers, creators, and innovators driven by a
              passion for technology. Founded with the belief that great ideas
              deserve to become extraordinary realities, we specialize in
              crafting software solutions that empower businesses, streamline
              processes, and elevate user experiences. Our team is a dynamic
              blend of seasoned professionals and fresh thinkers, each bringing
              unique expertise and boundless creativity to the table. Together,
              we foster a culture of collaboration, integrity, and a relentless
              commitment to excellence.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-8">What We Do?</h1>
            <p>
              We transform complex challenges into elegant, functional, and
              scalable software solutions. Whether it’s building custom
              applications, developing robust websites, or optimizing existing
              platforms, we cater to your unique needs with precision and care.
              From startups dreaming of their first product to enterprises
              seeking innovation, we are your partners in digital
              transformation. With cutting-edge technologies, agile
              methodologies, and a user-first approach, we deliver solutions
              that are not only technically sound but also aesthetically
              pleasing and intuitive to use. At MetaTech, we don’t just develop
              software—we create experiences that make a difference. Let us help
              you turn your vision into a reality.
            </p>
            <Link href="/contact">
              <Button title={"Contact"}></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
