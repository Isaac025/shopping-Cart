import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../src/assets/logo1.svg";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import recipe from "../src/assets/recipe";
import cart from "../src/assets/images/icon-add-to-cart.svg";
import emptyy from "../src/assets/emptyy.svg";
import remove from "../src/assets/images/icon-remove-item.svg";
import carbon from "../src/assets/images/icon-carbon-neutral.svg";
import { toast } from "react-toastify";
import confirm from "../src/assets/images/icon-order-confirmed.svg";
import ConfirmModal from "../components/ConfirmModal";

const Desserts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [addToCart, setAddToCart] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const redirect = useNavigate();

  const handleAddToCart = (item) => {
    setAddToCart((prev) => ({ ...prev, [item.id]: true }));
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setAddToCart((prev) => ({ ...prev, [itemToRemove.id]: false }));
    setCartItems((prev) => prev.filter((item) => item.id !== itemToRemove.id));
  };

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const orderConfirm = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div>
      <div className=" h-[80px] bg-white fixed top-0 left-0 right-0 shadow-md z-20">
        <nav className="container flex justify-between items-center py-4    ">
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
            onClick={() => redirect("/")}
          >
            Log Out
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
      <div className="bg-primary-light-3">
        <div className="container mt-22">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-black font-extrabold">
            Desserts
          </h1>
          <div className="relative">
            <div className="flex flex-col md:flex-row flex-wrap gap-3 mx-auto w-full">
              {recipe.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-md w-full max-w-[300px] max-sm:mx-auto relative"
                >
                  <img
                    src={item.image.desktop}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4 md:mb-6"
                  />

                  {addToCart[item.id] ? (
                    <div
                      onClick={() => removeFromCart(item)}
                      className="absolute top-46 left-20 w-[150px] h-[50px] cursor-pointer bg-primary-light-3 flex items-center justify-center text-gray-800 gap-2 hover:text-primary-light rounded-3xl border border-primary-light"
                    >
                      <img src={cart} alt="" /> Added to Cart
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="absolute top-46 left-20 w-[150px] h-[50px] cursor-grab bg-primary-light-3 flex items-center justify-center text-gray-800 gap-2 hover:text-primary-light rounded-3xl border border-primary-light"
                    >
                      <img src={cart} alt="" /> Add to Cart
                    </button>
                  )}

                  <h2 className="text-primary-light font-medium mb-2">
                    {item.category}
                  </h2>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-red-500">
                    Price: ${item.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="lg:absolute lg:top-2 lg:right-0.5 bg-white rounded-lg p-4 w-full max-w-[270px] ">
              <h1 className="text-red-500 font-medium text-[20px]">
                Your Cart ({cartItems.length})
              </h1>
              {cartItems.length === 0 ? (
                <img src={emptyy} alt="" />
              ) : (
                <ul>
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="border-b border-b-gray-500 my-3"
                    >
                      <div className="flex justify-between">
                        <span className="text-gray-800">{item.name}</span>
                        <img
                          src={remove}
                          alt=""
                          className="bg-gray-500 w-4 h-4 rounded-full cursor-pointer"
                          onClick={() => removeFromCart(item)}
                        />
                      </div>
                      <span className="text-gray-600">
                        ${item.price.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex justify-between">
                <span className="text-gray-800">Order Total:</span>
                <span className="text-black font-bold">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="text-gray-700 text-[12px] mt-3 text-center bg-primary-light-2 p-3.5 flex gap-1.5 rounded-md">
                <img src={carbon} alt="" />
                <p>
                  This is a <strong>carbon-neutral</strong> delivery
                </p>
              </div>
              <button
                onClick={orderConfirm}
                className="w-full bg-red-700 h-[50px] rounded-2xl mt-3 text-white font-medium cursor-pointer transition hover:scale-[110%] duration-300"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cartItems={cartItems}
        cartTotal={cartTotal}
      />
    </div>
  );
};

export default Desserts;
