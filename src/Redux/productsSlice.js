import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    product: [],
  },
  reducers: {
    loadProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadProduct } = ProductsSlice.actions;

export default ProductsSlice.reducer;
