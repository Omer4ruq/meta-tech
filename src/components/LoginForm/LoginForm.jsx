import { doSocialLogin } from "@/actions";
import React from "react";

const LoginForm = () => {
  return (
    <div>
      <form action={doSocialLogin}>
        <button
          className="bg-white rounded-sm shadow-sm p-2 m-1 text-lg"
          type="submit"
          name="action"
          value={"google"}
        >
          Sign in With Google
        </button>
        <button
          className="bg-white rounded-sm shadow-sm p-2 m-1 text-lg"
          type="submit"
          name="action"
          value={"github"}
        >
          Sign in With GitHub
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
