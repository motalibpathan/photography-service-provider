import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialMediaLogin from "../SocialMediaLogin/SocialMediaLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = (
      <p className="text-red-500 mt-3 text-center">Error: {error?.message}</p>
    );
  }

  return (
    <div className="md:container mx-auto w-full p-5 mb-10 min-h-screen">
      <h1 className="text-2xl text-center mt-5 font-bold text-rose-500">
        Please Login
      </h1>
      <form
        onSubmit={handleSubmit}
        className="md:w-1/3 w-full mt-10 mx-auto space-y-6"
      >
        <input
          className="w-full p-4 bg-gray-100 rounded-lg"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="w-full p-4 bg-gray-100 rounded-lg"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="w-full p-4 bg-rose-500 rounded-md text-white"
          type="submit"
          value={"Login"}
        />
      </form>
      {errorElement}
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
