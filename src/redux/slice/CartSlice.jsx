import { createSlice } from "@reduxjs/toolkit";


const capQuantity = (quantity, min = 1, max = 10) => {
  return Math.max(min, Math.min(quantity, max));
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const product = action.payload;
    
      const existingProduct = state.find((item) => item.id === product.id);
    
      if (existingProduct) {
       
        if (existingProduct.quantity < 10) {
          existingProduct.quantity += 1;
        }
      } else {
     
        state.push({ ...product, quantity: 1 }); 
      }
    },
    
    remove: (state, action) => {
      
      return state.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, delta } = action.payload; 
      const product = state.find((item) => item.id === id);

      if (product) {
        product.quantity = capQuantity(product.quantity + delta);
      }
    },
  },
});

export const { add, remove, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;

