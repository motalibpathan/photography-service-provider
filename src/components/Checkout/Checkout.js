import React from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Thank your for booking!");
  };

  return (
    <div className="md:container mx-auto p-5 min-h-screen">
      <h1 className="text-3xl font-bold text-center my-7">
        Check Out Item id: {id}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 w-full mt-10 mx-auto space-y-6"
      >
        <input
          className="w-full p-4 bg-gray-100 rounded-md"
          required
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          className="w-full p-4 bg-gray-100 rounded-md"
          required
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className="w-full p-4 bg-gray-100 rounded-md"
          required
          type="text"
          name="address"
          placeholder="Your Address"
        />
        <input
          className="w-full p-4 bg-gray-100 rounded-md"
          required
          type="text"
          name="phone"
          placeholder="Your Phone"
        />
        <input
          className="w-full p-4 bg-rose-500 rounded-md text-white cursor-pointer"
          type="submit"
          value={"Complete Book"}
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
