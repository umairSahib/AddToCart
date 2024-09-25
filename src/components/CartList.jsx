import React from "react";
import { useNavigate } from "react-router-dom";

function CartList({ cartData, decrement, increment, removeItem }) {
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
      {cartData.map((item) => {
        return (
          <div
            className="flex items-center justify-center pt-8  "
            key={item.id}
          >
            <div className=" bg-gray-300 border flex items-center pl-8 pr-8 pt-4 pb-4 w-1/2 h-40 rounded-lg">
              <img
                className="bg-white rounded-xl "
                src={item.thumbnail}
                alt="image"
                width={125}
              />

              <h1 className="flex self-start pl-8 text-lg text-green-500 font-semibold">
                {item.title}
              </h1>
              <div className="flex items-center ml-5  mr-5">
                <button
                  onClick={() => increment(item)}
                  className="pl-4 pr-4 pb-2 pt-2  border"
                >
                  +
                </button>

                <button className="pl-4 pr-4 pb-2 pt-2 border">
                  {item.qty}
                </button>
                <button
                  onClick={() => decrement(item)}
                  className="pl-4 pr-4 pb-2 pt-2 border "
                >
                  -
                </button>
              </div>
              <div>
                <button onClick={() => removeItem(item)}>✖</button>
              </div>
              <div className="flex self-end text-base font-semibold">
                {item.price}Rs
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default CartList;
