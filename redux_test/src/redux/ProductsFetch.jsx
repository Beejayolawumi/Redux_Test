import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const data = await fetch("https://dummyjson.com/products/1");
  return data.json();
});

// import React from "react";

const ProductsFetch = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (buider) => {
    buider.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    buider.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    buider.addCase(fetchProducts.rejected, (state, action) => {
      state.error = true;
    });
    return <div></div>;
  },
});

export default ProductsFetch.reducer;
