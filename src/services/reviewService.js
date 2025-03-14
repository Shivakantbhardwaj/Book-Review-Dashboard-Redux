import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Fetch all book reviews
export const fetchReviewsFromAPI = async () => {
  const response = await axios.get(API_URL);
  return response.data.slice(0, 10); // Fetch only first 10 reviews
};

// Add a new review
export const addReviewToAPI = async (review) => {
  const response = await axios.post(API_URL, review);
  return response.data;
};

// Update a review
export const updateReviewInAPI = async (id, updatedReview) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedReview);
  return response.data;
};

// Delete a review
export const deleteReviewFromAPI = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};
