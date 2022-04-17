import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 p-5 bottom-0 w-full">
      <div className="md:container mx-auto">
        <p className="text-center text-gray-200">
          Copyright &copy; - {new Date().getFullYear()} Eric Photography
        </p>
      </div>
    </div>
  );
};

export default Footer;
