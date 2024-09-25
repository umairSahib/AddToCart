import React from "react";
import { Link } from "react-router-dom";

const Header = ({ handleFilter, count }) => {
  return (
    <>
      <header>
        <div className="flex justify-between items-center text-white pl-10 pr-10 bg-slate-600 p-4">
          <div className="flex gap-4">
            <div
              onClick={() => handleFilter("home")}
              className="text-lg font-semibold font-mono cursor-pointer"
            >
              <Link to="/">Home</Link>
            </div>
            <div
              onClick={() => handleFilter("Beauty")}
              className="text-lg font-semibold font-mono cursor-pointer"
            >
              Beauty
            </div>
            <div
              onClick={() => handleFilter("Grocery")}
              className="text-lg font-semibold font-mono cursor-pointer"
            >
              Grocery
            </div>
            <div
              onClick={() => handleFilter("Fragrances")}
              className="text-lg font-semibold font-mono cursor-pointer"
            >
              Fragrances
            </div>
            <div
              onClick={() => handleFilter("Furniture")}
              className="text-lg font-semibold font-mono cursor-pointer"
            >
              Furniture
            </div>
          </div>
          <div>
            <sup className="text-base font-semibold">{count}</sup>
            <Link className="text-2xl" to="/cart">
              🛒{" "}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
