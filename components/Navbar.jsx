import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../src/assets/logo1.svg";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const redirect = useNavigate();

  // const handleMenuOpen = () => {
  //   setIsOpen(true);
  // };
  // const handleMenuClose = () => {
  //   setIsOpen(false);
  // };

  return (
    <div className=" h-[80px] bg-white fixed top-0 left-0 right-0 shadow-md">
      <nav className="container flex justify-between items-center py-4  z-20  ">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <ul className="lg:flex items-center gap-8 hidden">
          {["About", "Contact", "Testimonials"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
             text-xl
            text-gray-800 font-[900] hover:text-primary-light 
            transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-primary-light
          "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="max-w-[120px] w-full h-[50px] rounded-md bg-primary-light text-white font-medium text-[20px] hover:text-primary-light hover:bg-primary-light-3 cursor-pointer hover:border-2 border-primary-light"
          onClick={() => redirect("/register")}
        >
          Sign up
        </button>

        {!isOpen ? (
          <BiMenu
            color="orangered"
            size={40}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          />
        ) : (
          <CgClose
            color="orangered"
            size={40}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          />
        )}

        {/* <button>
          <BiMenu color="orangered" size={40} />
        </button>

        <button>
          <CgClose color="orangered" size={40} />
        </button> */}

        {isOpen && (
          <div className="absolute top-16 right-0 w-full bg-primary-light-3 text-primary-light text-center py-4 border-b border-b-gray-500">
            <ul className="flex flex-col gap-2">
              <li className="border-b border-b-gray-300">
                <a href="#about">About</a>
              </li>
              <li className="border-b border-b-gray-300">
                <a href="#contact">Contact</a>
              </li>
              <li className="border-b border-b-gray-300">
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
