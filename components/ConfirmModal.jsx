import React from "react";
import confirm from "../src/assets/images/icon-order-confirmed.svg";

const ConfirmModal = ({ isOpen, onClose, cartItems, cartTotal }) => {
  {
    /* Open the modal using document.getElementById('ID').showModal() method */
  }
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog
        id="my_modal_1"
        className={`modal  ${isOpen ? "modal-open" : ""}`}
      >
        <div className="modal-box bg-primary-light-3 max-w-[400px]">
          <img src={confirm} alt="" />
          <h1 className="font-bold text-2xl md:text-4xl text-gray-800">
            Order Confirmed
          </h1>
          <p className="text-primary-light font-[500] text-[8px] md:text-[12px] mb-5">
            We hope you enjoyed your meal!
          </p>

          <div className="bg-primary-light-2 p-5 rounded-lg ">
            {cartItems.map((item) => {
              return (
                <div key={item.id}>
                  <ul>
                    <li className="flex items-center justify-between border-b border-b-gray-800 mb-4 pb-2">
                      <div className="flex gap-3 items-center">
                        <img
                          src={item.image.thumbnail}
                          alt=""
                          className="w-[50px] h-[50px] "
                        />
                        <h4 className="font-medium text-gray-600 text-sm">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-gray-600 font-[600]">
                        ${item.price.toFixed(2)}
                      </p>
                    </li>
                  </ul>
                </div>
              );
            })}
            <div className="flex justify-between">
              <span className="text-gray-800">Order Total:</span>
              <span className="text-black font-bold">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
          </div>
          <div>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={onClose}
                className="w-full bg-red-500 h-[50px] rounded-4xl mt-3 text-primary-light-2 font-medium cursor-pointer transition hover:scale-[110%] duration-300"
              >
                Start New Order
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ConfirmModal;
