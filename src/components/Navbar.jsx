import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
  
        <div className="font-medium mr-5 space-x-6 text-gray-800 text-xl">Teson llp Assignment</div>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <h1 className="text-gray-800 hover:scale-150 transition duration-200 ease-in">Home</h1>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative hover:scale-150 transition duration-200 ease-in">
              <FaShoppingCart className="text-4xl text-gray-800"  />
              {cart.length > 0 && (
                <span className="absolute top-1 right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
