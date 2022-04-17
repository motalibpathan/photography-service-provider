import React from "react";
import { Link } from "react-router-dom";
import SocialMediaLogin from "../SocialMediaLogin/SocialMediaLogin";

const SignUp = () => {
  return (
    <div className="md:container mx-auto w-full p-5 mb-10 ">
      <h1 className="text-2xl text-center mt-5 font-bold text-rose-500">
        Please Signup
      </h1>
      <form className="md:w-1/3 w-full mt-10 mx-auto space-y-6">
        <input
          className="w-full p-4 bg-gray-100 rounded-lg"
          type="text"
          placeholder="name"
        />
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
          className="w-full p-4 bg-gray-100 rounded-lg"
          type="password"
          placeholder="Confirm Password"
        />
        <input
          className="w-full p-4 bg-rose-500 rounded-md text-white"
          type="submit"
          value="Sign up"
        />
      </form>
      <p className="text-center mt-5">
        Already have account?{" "}
        <Link to={"/login"} className="text-rose-500 underline">
          Login
        </Link>
      </p>
      <SocialMediaLogin />
    </div>
  );
};

export default SignUp;
