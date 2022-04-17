import React from "react";
import { Link } from "react-router-dom";
import SocialMediaLogin from "../SocialMediaLogin/SocialMediaLogin";

const Login = () => {
  return (
    <div className="md:container mx-auto w-full p-5 mb-10 min-h-screen">
      <h1 className="text-2xl text-center mt-5 font-bold text-rose-500">
        Please Login
      </h1>
      <form className="md:w-1/3 w-full mt-10 mx-auto space-y-6">
        <input
          className="w-full p-4 bg-gray-100 rounded-lg"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full p-4 bg-gray-100 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <input
          className="w-full p-4 bg-rose-500 rounded-md text-white"
          type="submit"
          value={"Login"}
        />
      </form>
      <p className="text-center mt-5">
        New to Eric Photography?{" "}
        <Link to={"/sign-up"} className="text-rose-500 underline">
          Signup
        </Link>
      </p>
      <SocialMediaLogin />
    </div>
  );
};

export default Login;
