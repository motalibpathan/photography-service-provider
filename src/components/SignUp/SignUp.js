import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialMediaLogin from "../SocialMediaLogin/SocialMediaLogin";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  if (loading || updating) {
    return <Loading></Loading>;
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    } else {
      toast.warn("Password and confirm password does not match!");
    }
  };

  return (
    <div className="md:container mx-auto w-full p-5 mb-10 ">
      <h1 className="text-2xl text-center mt-5 font-bold text-rose-500">
        Please Signup
      </h1>
      <form
        onSubmit={handleSignUp}
        className="md:w-1/3 w-full mt-10 mx-auto space-y-6"
      >
        <input
          required
          className="w-full p-4 bg-gray-100 rounded-md"
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          required
          className="w-full p-4 bg-gray-100 rounded-md"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          required
          className="w-full p-4 bg-gray-100 rounded-md"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          required
          className="w-full p-4 bg-gray-100 rounded-md"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <input
          className="w-full p-4 bg-rose-500 rounded-md text-white cursor-pointer"
          type="submit"
          value="Sign up"
        />
      </form>
      <p className="text-red-500 text-center my-2">{error?.message}</p>
      <p className="text-center mt-5">
        Already have account?{" "}
        <button
          onClick={() => navigate("/login", { state: location.state })}
          className="text-rose-500 underline"
        >
          Login
        </button>
      </p>
      <SocialMediaLogin />
      <ToastContainer />
    </div>
  );
};

export default SignUp;
