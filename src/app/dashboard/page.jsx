import LoginForm from "@/components/LoginForm/LoginForm";
import { useSession } from "next-auth/react";
import React from "react";
import { auth } from "@/auth/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

const page = async () => {
  const session = await auth();
  if (!session?.user) redirect("/");
  return (
    <div>
      <h1>{session?.user?.name}</h1>
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={72}
        height={72}
        className="rounded-full"
      ></Image>
    </div>
  );
};

export default page;
