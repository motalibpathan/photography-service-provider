import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, img, title, desc, price } = service;
  const cardBg = { backgroundImage: `url(${img})` };
  const navigate = useNavigate();

  const handleCheckOut = (id) => {
    navigate(`/checkout/${id}`);
  };

  return (
    <div
      style={cardBg}
      className="group shadow-md rounded-xl mt-5 hover:-translate-y-5 duration-500 md:h-[700px] h-[600px] bg-no-repeat bg-cover relative overflow-hidden "
    >
      <div className="h-full w-full bg-gradient-to-t from-black "></div>
      <div className="p-5 text-white absolute bottom-0 ">
        <h1 className="text-2xl font-bold text-white pt-14">{title}</h1>
        <p className="my-3">{desc}</p>
        <p className="text-2xl font-bold">Price: $ {price}</p>
        <button
          onClick={() => handleCheckOut(id)}
          className="px-7 bg-rose-500 border-2 border-rose-500 py-2 rounded-md mt-6 hover:bg-transparent hover:-translate-y-2 duration-500 text-white "
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Service;
