import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { BsPersonCircle } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiLock, BiPhone } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/logo1.svg";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div>
      <div className=" h-[80px] bg-white fixed top-0 left-0 right-0 shadow-md z-20">
        <nav className="container flex justify-between items-center py-4">
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
            <div className="absolute top-16 right-0 w-full bg-primary-light-3 z-20 text-primary-light text-center py-4 border-b border-b-gray-500">
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

      <div className="max-w-[1024px] w-full flex flex-col md:flex-row gap-5 lg:gap-65 items-center mx-auto">
        <img
          src="https://images.unsplash.com/photo-1674027392857-9aed6e8ecab9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
          className="max-w-[400px] rounded-lg shadow-2xl "
        />
        <div className=" flex items-center justify-center">
          <form
            className="  w-[400px]  my-20 bg-primary-light-2 shadow-md rounded-md p-8 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="email" className="labell">
                Email<span className="spann">*</span>
              </label>
              <div className="relative">
                <MdEmail color="darkred" className="input-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="inputt"
                  {...register("email")}
                />
              </div>
              <p
                className={`${
                  errors ? "text-red-600" : "border border-green-400"
                }`}
              >
                {errors.email?.message}
              </p>
            </div>
            <div>
              <label htmlFor="password" className="labell">
                Password<span className="spann">*</span>
              </label>
              <div className="relative">
                <BiLock color="darkred" className="input-icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="inputt"
                  {...register("password")}
                />
              </div>
              <p
                className={`${
                  errors ? "text-red-600" : "border border-green-400"
                }`}
              >
                {errors.password?.message}
              </p>
            </div>

            <button
              type="submit"
              className="mt-6 bg-primary-light text-white font-medium text-[20px] w-full h-[50px] rounded-md hover:text-primary-light hover:bg-primary-light-3 cursor-pointer hover:border-2 border-primary-light"
            >
              Login
            </button>
            <p className=" text-gray-700 mt-4 text-center">
              Dont have an account?{" "}
              <a
                href="/register"
                className="text-primary-light font-medium hover:underline"
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
