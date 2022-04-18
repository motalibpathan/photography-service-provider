import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 md:p-7 p-5 bottom-0 w-full">
      <div className="md:container mx-auto">
        <div className="md:grid grid-cols-3 text-white">
          <div>
            <h1 className="text-xl font-bold my-3 text-rose-500">
              Information
            </h1>
            <ul className="space-y-2">
              <li>About Me</li>
              <li>Contact</li>
              <li>FAQs</li>
              <li>Terms & Conditions </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold my-3 text-rose-500">
              Photo Gallery
            </h1>
            <ul className="space-y-2">
              <li>Portrait Photography</li>
              <li>Fashion Photography</li>
              <li>Sports Photography</li>
              <li>Product Photography</li>
              <li>Weeding Photography</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold my-3 text-rose-500">
              Social Media
            </h1>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Youtube</li>
              <li>Instagram</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-300 mt-7">
          Copyright &copy; - {new Date().getFullYear()} Eric Photography
        </p>
      </div>
    </div>
  );
};

export default Footer;

// Information
// About us
// Contact us
// FAQ
// Request City
// Terms & Conditions
// Privacy Policy
