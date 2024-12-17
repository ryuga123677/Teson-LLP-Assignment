import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../redux/slice/CartSlice";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { remove } from "../redux/slice/CartSlice";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
 
  const handleQuantityChange = (delta) => {
    const newQuantity = item.quantity + delta;
  
    if (newQuantity < 1) {
      toast.error("Amount cannot be less than 1");
      return; 
    }
  
    if (newQuantity > 10) {
      toast.error("Maximum quantity is 10");
      return; 
    }
  
    dispatch(updateQuantity({ id: item.id, delta })); 
    
  };
  const removeFromCart = () => {
    console.log("Removing item with ID:", item.id); // Debug log
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };
  
  

  return (
    <div className="m-5 flex flex-col h-[200px]">
      <div className="flex flex-row justify-evenly gap-5 h-full w-full">
        {/* Product Image */}
        <div className="h-full w-4/12">
          <img className="h-full" src={item.image} alt="Your Product" />
        </div>

        {/* Product Details */}
        <div className="w-8/12 flex flex-col justify-evenly">
          <h1 className="text-2xl font-bold text-gray-800">{item.title}</h1>
          <h1 className="text-gray-400 font-normal text-[12px] text-left">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>

          {/* Price and Amount Controls */}
          <div className="flex flex-row justify-between items-center w-full mt-5">
            <p className="text-green-600 font-bold text-xl">
              $ {item.price}
            </p>
            
            {/* Amount Controls */}
            <div className="flex flex-row items-center gap-3">
              <div>Quantity:  {item.quantity}</div>
              <button
                className="w-[30px] h-[30px] rounded-full bg-gray-200 flex justify-center items-center
                hover:bg-gray-300 transition duration-200 ease-in cursor-pointer"
                onClick={() => handleQuantityChange(-1)}
              >
                <MdRemove className="text-gray-800" />
              </button>
              <span className="text-lg font-semibold">{item.amount}</span>
              <button
                className="w-[30px] h-[30px] rounded-full bg-gray-200 flex justify-center items-center
                hover:bg-gray-300 transition duration-200 ease-in cursor-pointer"
                onClick={() => handleQuantityChange(1)}
              >
                <MdAdd className="text-gray-800" />
              </button>
              <div
              className="w-[30px] h-[30px] rounded-full bg-red-300 flex justify-center items-center
              hover:scale-125 transition duration-200 ease-in 
              cursor-pointer
              "
              onClick={removeFromCart}
            >
              <MdDelete className="text-red-900 " />
            </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr className="border-solid border-black h-5" />
    </div>
  );
};

export default CartItem;

