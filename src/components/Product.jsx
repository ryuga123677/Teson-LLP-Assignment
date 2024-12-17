import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slice/CartSlice";
const Product = ({ post }) => {
 

  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart Successfully");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Remove from Cart");
  };
  return (
    <div
      className="flex flex-col items-center justify-between 
     hover:scale-110 transition duration-200 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border-2 border-solid
     hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
     shadow-lg
     "
    >
      <div className=" text-gray-700 font-semibold text-lg text-left  w-40 mt-1 leading-tight tracking-tighter">
        <p>{post.title}</p>
      </div>

      <div>
        <p className="w-40 text-gray-500 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      <div className="bg-teal-500 h-[180px]">
        <img className="h-full w-full" src={post.image} alt="Product Image" />
      </div>

      <div className="flex flex-row justify-between gap-12 items-center w-full mt-5 ">
        <div>
          <p className="text-green-600 font-semibold">$ {post.price}</p>
        </div>

       
        {cart.some((p) => p.id == post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-200 ease-in
          "
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-200 ease-in
          "
            onClick={addToCart}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
