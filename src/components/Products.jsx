import React from "react";
import { Link } from "react-router-dom";

const Products = ({ data, increment, decrement }) => {
  //   console.log("🚀 ~ items ~ data:", data);
  return (
    <div className="pt-8 px-4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <Link to={`/cartDetails/${item.id}`} state={item}>
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              className="w-full h-auto object-cover"
              src={item.thumbnail}
              alt={item.name}
            />
            <div className="p-4">
              <div className="text-lg font-semibold text-center">
                {item.title}
              </div>
              <div className="text-sm font-normal text-center">
                {item.description.slice(0, 90)}...
              </div>
              <div className="flex justify-center text-2xl font-bold text-gray-900 dark:text-white">
                {item.price}
                {""}RS
              </div>
              <div className="flex justify-between items-center mt-3">
                <button
                  onClick={() => decrement(item)}
                  className="px-2 py-2 pt-1 pb-1 bg-cyan-700 rounded-full text-white"
                >
                  {" "}
                  -
                </button>
                <div>{item.qty || 0}</div>

                <button
                  onClick={() => increment(item)}
                  className="px-2 py-2 pt-1 pb-1 bg-cyan-700 rounded-full text-white"
                >
                  +
                </button>
                <button
                  onClick={(e) => increment(item, e)}
                  className="rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
