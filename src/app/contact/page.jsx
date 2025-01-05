import Image from "next/image";
import React from "react";
import contactImage from "../../../public/images/contact.png";
import Button from "@/components/button/Button";

const Contact = () => {
  return (
    <div>
      <h1 className="text-6xl mb-24 text-center">Let's keep in Touch</h1>
      <div className="flex items-center gap-24">
        <div className="flex-1 h-[500px] relative">
          <Image
            src={contactImage}
            alt="contact"
            fill
            className="animate-move"
          ></Image>
        </div>
        <form action="" className="flex-1 flex flex-col gap-5">
          <input
            type="text"
            placeholder="name"
            className="p-5 bg-transparent 
          outline-none text-[#bbb] border-2 border-[#bbb] text-2xl font-bold "
          />
          <input
            type="text"
            placeholder="email"
            className="p-5 bg-transparent 
          outline-none text-[#bbb] border-2 border-[#bbb] text-2xl font-bold"
          />
          <textarea
            name=""
            placeholder="message"
            cols="30"
            rows="10"
            id=""
            className="p-5 bg-transparent
          outline-none text-[#bbb] border-2 border-[#bbb] text-2xl font-bold"
          ></textarea>
          <Button title="Send"></Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
