"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext, useState } from "react";
import { getCart } from "@/app/actions";
import { Toastr } from "@/utils/utilityFunctions";
import { CartContext } from "@/app/contexts";

const Action = ({ product_id, session }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const {totalCart, setTotalCart} = useContext(CartContext);

  const handleAddToCart = async () => {
    const email = session?.user?.email; // replace with your user id

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "api/cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, product_id, quantity }),
        }
      );

      const data = await response.json();
      console.log("data", data);

      if (response.success) {
       const cart= await getCart(email);
       setTotalCart(cart?.data?.length);
        
        Toastr({ message: data.message, type: "success" });
      } else {
        Toastr({ message: data.message, type: "success" });
      }

      console.log("Item added to cart:", data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="mt-4">
        <h3 className="mb-1 text-sm text-gray-800 uppercase">Quantity</h3>
        <div className="flex text-gray-600 border border-gray-300 divide-x divide-gray-300 w-max">
          <div
            className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"
            onClick={decrementQuantity}
          >
            -
          </div>
          <div className="flex items-center justify-center w-8 h-8 text-base">
            {quantity}
          </div>
          <div
            className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"
            onClick={incrementQuantity}
          >
            +
          </div>
        </div>
      </div>

      <div className="flex gap-3 pt-5 pb-5 mt-6 border-b border-gray-200">
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 px-8 py-2 font-medium text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary"
        >
          <i className="fa-solid fa-bag-shopping"></i> Add to cart
        </button>
        <button className="flex items-center gap-2 px-8 py-2 font-medium text-gray-600 uppercase transition border border-gray-300 rounded hover:text-primary">
          <i className="fa-solid fa-heart"></i> Wishlist
        </button>
      </div>
    </>
  );
};

export default Action;
