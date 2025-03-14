import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./reviewSlice"; // ✅ Ensure correct reducer import

export const store = configureStore({
  reducer: {
    reviews: reviewReducer, // ✅ Ensure reducer is correctly added
  },
});

export default store;
