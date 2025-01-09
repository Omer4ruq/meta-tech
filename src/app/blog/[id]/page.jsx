import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound;
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div>
      <div className="gap-4">
        <div className="flex justify-between mb-4">
          <div className="gap-4">
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
            <h2>{data.username}</h2>
          </div>
          <Image src={data.img} alt="post image" width={200} height={200} />
        </div>
        <div>
          <p>{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
