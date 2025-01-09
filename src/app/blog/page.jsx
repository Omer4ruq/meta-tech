import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async ({ params }) => {
  const data = await getData();
  return (
    <div>
      {data.map((item) => (
        <Link
          key={item._id}
          href={`/blog/${item._id}`}
          className="flex gap-12 mt-12 mb-24"
        >
          <div className="flex-1 h-[500px] relative">
            <Image
              src={item.img}
              fill
              className="object"
              alt="bgol image"
            ></Image>
          </div>
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h1 className="text-4xl font-bold">{item.title}</h1>
            <p className="text-xl ">{item.desc}</p>
            <p className="text-xl ">{item.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
