import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const { totalAmount, setTotalAmount } = useState(0);

  // useEffect( () => {
  //   setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  // }, [cart])

  return (
    <div className=" ">
      {cart.length > 0 ? (
        <div className="flex justify-evenly">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div>
            <div className=" ">



              <h1>Your Cart</h1>
              <p>Summary:</p>

              <p>
                <span>Total Items : {cart.length}</span>
              </p>

              <div>
                <p>Total Amount : {totalAmount}</p>

                <button className="bg-green-500 px-10 py-5">Check Now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty</h1>
          <Link to={"/"}>
            <button className="">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
