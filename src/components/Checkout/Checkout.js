import React from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>This is checkout {id}</h1>
    </div>
  );
};

export default Checkout;
