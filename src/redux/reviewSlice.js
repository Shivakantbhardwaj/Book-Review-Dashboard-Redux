import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchReviewsFromAPI,
  addReviewToAPI,
  updateReviewInAPI,
  deleteReviewFromAPI,
} from "../services/reviewService";

// Async thunk to fetch reviews
export const fetchReviews = createAsyncThunk("reviews/fetchReviews", async () => {
  return await fetchReviewsFromAPI();
});

// Async thunk to add a new review
export const addReview = createAsyncThunk("reviews/addReview", async (review) => {
  return await addReviewToAPI(review);
});

// Async thunk to update a review
export const updateReview = createAsyncThunk("reviews/updateReview", async ({ id, updatedReview }) => {
  return await updateReviewInAPI(id, updatedReview);
});

// Async thunk to delete a review
export const deleteReview = createAsyncThunk("reviews/deleteReview", async (id) => {
  return await deleteReviewFromAPI(id);
});

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        const index = state.reviews.findIndex((r) => r.id === action.payload.id);
        if (index !== -1) state.reviews[index] = action.payload;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter((r) => r.id !== action.payload);
      });
  },
});

export default reviewSlice.reducer;
