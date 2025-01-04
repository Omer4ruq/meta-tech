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
        </div>

        <div>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
        <div>
          <div>
            <h1>Who Are We</h1>
            <p></p>
          </div>
          <div>
            <h1>What We Do?</h1>
            <p></p>
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
