import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsFetch";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
