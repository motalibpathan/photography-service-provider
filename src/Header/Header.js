import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = [
    { id: 1, name: "About Me", to: "/about-me" },
    { id: 2, name: "Blogs", to: "/blogs" },
    { id: 3, name: "Login", to: "/login" },
    { id: 4, name: "Sign up", to: "/sign-up" },
  ];
  const navLinks = pages.map((page) => (
    <Link
      key={page.id}
      className={`no-underline text-gray-800 font-semibold  ${
        page.name === "Sign up"
          ? " md:px-7 md:bg-rose-500 bg-white py-2 md:text-white rounded-full "
          : "hover:text-gray-600"
      }`}
      to={`${page.to}`}
    >
      {page.name}
    </Link>
  ));

  return (
    <div className="shadow-xl">
      <div className="md:container mx-auto ">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold no-underline text-gray-800 hover:text-gray-600"
            >
              Eric Photography
            </Link>
          </div>
          <nav className="hidden md:block space-x-6">{navLinks}</nav>
          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
          >
            <MenuAlt4Svg menuOpen={menuOpen} />
          </button>
        </div>
        {menuOpen && (
          <nav className="p-4 flex flex-col space-y-3 md:hidden">
            {navLinks}
          </nav>
        )}
      </div>
    </div>
  );
};

const MenuAlt4Svg = ({ menuOpen }) =>
  !menuOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

export default Header;
