import React from "react";
import { doLogout } from "@/actions/index";

const Logout = () => {
  return (
    <div>
      <form action={doLogout}>
        <button
          type="submit"
          className="p-1 px-4 border-none bg-[#53c28b] text-white cursor-pointer rounded"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Logout;
