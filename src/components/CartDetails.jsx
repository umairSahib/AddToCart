import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CartDetails = ({ increment, decrement }) => {
  const { id } = useParams();
  const { state } = useLocation();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <i
          onClick={handleClick}
          className="fa-solid fa-arrow-left ml-10 mt-5 text-lg cursor-pointer"
        ></i>
      </div>
      <div className="bg-[#F0F2FA] pl-4 pr-4 pt-8 ">
        <div className="bg-white mt-12 ml-32 mr-12 flex  relative">
          <div className=" absolute -left-10 top-10">
            <img
              className="w-60 h-auto"
              src={state.thumbnail}
              alt="placeholder"
            />
          </div>

          <div className="pl-48 pr-10 pt-10">
            <h1 className=" text-xl font-semibold font-Roboto mt-6 pl-4">
              {state.title}
            </h1>
            <div className="flex gap-2 pt-4 pl-4">
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </div>
            <div>
              <h2 className="text-[#C3C4CA] font-Roboto text-base text-medium pt-8 pl-4">
                Overview
              </h2>
            </div>
            <div className=" pt-2 pl-4">
              <h3 className="font-normal font-Roboto text-base max-w-xl  ">
                {state.description}
              </h3>
              <div className="flex  items-center mt-3">
                <button
                  onClick={() => decrement(state)}
                  className="px-4 py-2 bg-cyan-700 rounded-lg text-white"
                >
                  {" "}
                  -
                </button>
                <div>{state.qty || 0}</div>

                <button
                  onClick={() => increment(state)}
                  className="px-4 py-2 bg-cyan-700 rounded-lg text-white"
                >
                  +
                </button>
              </div>
              <div className="mt-3">
                {" "}
                <button
                  onClick={() => increment(state)}
                  className="rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
