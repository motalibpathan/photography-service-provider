import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import Slider from "../Slider/Slider";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mb-10">
      <Slider />
      <div className=" md:container mx-auto">
        <h1 className="text-center text-4xl font-bold my-5">Services</h1>
        <div className="md:grid grid-cols-3 gap-5 p-5">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
