import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialMediaLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  return (
    <div className="md:w-1/3 w-full mt-3 mx-auto space-y-6">
      <p className="text-red-500 text-center">{error?.message}</p>
      <div className="flex items-center">
        <div className="w-1/2 bg-gray-400 h-1"></div>
        <p className="p-3">or</p>
        <div className="w-1/2 bg-gray-400 h-1"></div>
      </div>
      <button
        onClick={() => signInWithGoogle()}
        className="w-full p-3 bg-white border-2 rounded-md flex justify-center items-center"
      >
        <img
          className="mr-2"
          width={30}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          alt="google"
        />
        Sign in with google
      </button>
      <button className="w-full p-3 bg-white border-2 rounded-md flex justify-center items-center">
        <img
          className="mr-2"
          width={30}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
          alt="google"
        />
        Sign in with Facebook
      </button>
      <button className="w-full p-3 bg-white border-2 rounded-md flex justify-center items-center">
        <img
          className="mr-2"
          width={30}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="google"
        />
        Sign in with Github
      </button>
    </div>
  );
};

export default SocialMediaLogin;
