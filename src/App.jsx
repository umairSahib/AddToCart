import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import CartList from "./components/CartList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartDetails from "./components/CartDetails";

const App = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [cartData, setCartData] = useState([]);
  console.log("🚀 ~ App ~ cartData:", cartData);
  const [cartList, setCartList] = useState([]);
  const [count, setCount] = useState(0);

  const fetchApi = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const myData = await response.json();

    setData(myData.products);
    setFilterData(myData.products);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  function handleFilter(val) {
    if (val === "home") {
      setData(filterData);
    }
    if (val === "Beauty") {
      const filterBeauty = filterData.filter((obj) => {
        return obj.category === "beauty";
      });
      setData(filterBeauty);
    }
    if (val === "Grocery") {
      const filterGrocery = filterData.filter(
        (obj) => obj.category === "groceries"
      );
      setData(filterGrocery);
    }
    if (val === "Fragrances") {
      const filterBeauty = filterData.filter(
        (obj) => obj.category === "fragrances"
      );
      setData(filterBeauty);
    }
    if (val === "Furniture") {
      const filterBeauty = filterData.filter(
        (obj) => obj.category === "furniture"
      );
      setData(filterBeauty);
    }
  }

  const increment = (item, e) => {
   
    e.preventDefault();
    if (cartData.length > 0) {
      const objectExist = cartData.some((obj) => obj.id === item.id);
      if (objectExist) {
        const data = cartData.map((obj) => {
          if (obj.id === item.id) {
            item.qty += 1;
          }
          return obj;
        });
        setCartData(data);
      } else {
        item.qty = 1;
        cartData.push(item);
        setCartData([...cartData]);
      }
    } else {
      item.qty = 1;
      setCartData([item]);
    }
  };
  const decrement = (item) => {
    if (cartData.length > 0) {
      const isObjectExist = cartData.find((obj) => obj.id === item.id);

      if (isObjectExist) {
        if (isObjectExist.qty > 0) {
          isObjectExist.qty -= 1;
        } else {
          isObjectExist.qty = 0;
        }
        const filterD = cartData.filter((obj) => obj.id !== item.id);
        // console.log("🚀 ~ decrement ~ filterD:", filterD);

        if (isObjectExist.qty) {
          setCartData([...filterD, isObjectExist]);
        } else {
          setCartData(filterD);
        }
      }
    }
  };
  // const addToCart = (item) => {
  //   debugger;
  //   console.log("🚀 ~ addToCart ~ item:", item);

  //   setCartList([...cartList, { ...item, quantity: 1 }]);
  // };
  const removeItem = (item) => {
    console.log("Cart before removal:", cartData);
    console.log("Item to remove:", item);
    const remove = cartData.filter((product) => product.id !== item.id);

    setCartData(remove);
  };
  return (
    <>
      <Router>
        <Header handleFilter={handleFilter} count={cartData.length} />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                data={data}
                increment={increment}
                decrement={decrement}
                // addToCart={addToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartList
                cartData={cartData}
                increment={increment}
                decrement={decrement}
                removeItem={removeItem}
              />
            }
          />
          <Route
            path="/cartDetails/:id"
            element={
              <CartDetails increment={increment} decrement={decrement} />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
