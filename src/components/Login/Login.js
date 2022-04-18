import React, { useEffect, useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialMediaLogin from "../SocialMediaLogin/SocialMediaLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = (
      <p className="text-red-500 mt-3 text-center">Error: {error?.message}</p>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email!");
    } else {
      toast.warn("Please enter your email address!");
    }
  };

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
          ref={emailRef}
          className="w-full p-4 bg-gray-100 rounded-md"
          required
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className="w-full p-4 bg-gray-100 rounded-md"
          required
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="w-full p-4 bg-rose-500 rounded-md text-white cursor-pointer"
          type="submit"
          value={"Login"}
        />
      </form>
      {errorElement}
      <p className="text-center mt-5">
        New to Eric Photography?{" "}
        <button
          onClick={() => navigate("/signup", { state: location.state })}
          className="text-rose-500 underline"
        >
          Signup
        </button>
      </p>
      <p className="text-center mt-3">
        Forget Password?{" "}
        <button
          className="text-red-500 underline"
          onClick={() => resetPassword()}
        >
          Reset Password
        </button>{" "}
      </p>
      <SocialMediaLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;
