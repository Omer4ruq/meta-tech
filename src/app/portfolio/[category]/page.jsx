import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const Category = ({ params }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#53c28b]">{params.category}</h1>
      <div className="flex gap-12 mt-12 mb-24">
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="text-4xl font-bold">Title</h1>
          <p className="text-xl ">disc</p>
          <Button title="See More"></Button>
        </div>
        <div className="flex-1 h-[500px] relative">
          <Image
            src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object"
          ></Image>
        </div>
      </div>
      <div className="flex gap-12 mt-12 mb-24">
        <div className="flex-1 h-[500px] relative">
          <Image
            src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object"
          ></Image>
        </div>
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1>Title</h1>
          <p>disc</p>
          <Button title="See More"></Button>
        </div>
      </div>
    </div>
  );
};

export default Category;
