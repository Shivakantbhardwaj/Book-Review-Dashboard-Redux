import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../redux/reviewSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { reviews, loading, error } = useSelector((state) => state.reviews);

  // Fetch reviews when the component loads
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Book Reviews</h1>

      {/* Loading State */}
      {loading && <p className="text-blue-500">Loading...</p>}

      {/* Error State */}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Review List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold">{review.title}</h2>
            <p className="text-gray-600">{review.body}</p>
            <p className="text-sm text-gray-500">Author: Unknown</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
