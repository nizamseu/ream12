import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    product: [],
    cart: [],
  },
  reducers: {
    loadProduct: (state, action) => {
      state.product = action.payload;
    },
    addCart: (state, action) => {
      const restCart = [...state.cart, action.payload];
      const arrayUniqueByKey = [
        ...new Map(restCart.map((item) => [item["_id"], item])).values(),
      ];
      state.cart = arrayUniqueByKey;
    },
    deleteToCart: (state, action) => {
      state.cart = state.cart.filter((pd) => pd._id !== action.payload._id);
    },
    clearCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadProduct, addCart, deleteToCart, clearCart } =
  ProductsSlice.actions;

export default ProductsSlice.reducer;
