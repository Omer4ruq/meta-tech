import Link from "next/link";
import React from "react";

const LoginRegisterButton = ({ title, url }) => {
  return (
    <div>
      <Link href={url}>
        {" "}
        <button
          type="submit"
          className="p-1 px-4 border-none bg-[#53c28b] text-white cursor-pointer rounded"
        >
          {title}
        </button>
      </Link>
    </div>
  );
};

export default LoginRegisterButton;
