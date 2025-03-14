import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../redux/reviewSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ManageReviews = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { reviews } = useSelector((state) => state.reviews);

  const handleEdit = (review) => {
    navigate("/edit-review", { state: review });
  };

  const handleDelete = (id) => {
    dispatch(deleteReview(id));
    toast.success("Review deleted successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Manage Reviews</h1>

      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 border rounded-lg shadow-md bg-white">
              <h2 className="text-xl font-semibold">{review.title}</h2>
              <p className="text-gray-600">{review.body}</p>
              <p className="text-sm text-gray-500">Author: {review.author || "Unknown"}</p>

              <div className="mt-2 flex space-x-2">
                <button
                  onClick={() => handleEdit(review)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(review.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageReviews;
