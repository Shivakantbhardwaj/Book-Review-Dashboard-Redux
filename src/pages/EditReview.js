import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateReview } from "../redux/reviewSlice";
import { toast } from "react-toastify";

const EditReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { id, title: oldTitle, body: oldDescription, author: oldAuthor } = location.state || {};
  
  const [title, setTitle] = useState(oldTitle);
  const [author, setAuthor] = useState(oldAuthor);
  const [description, setDescription] = useState(oldDescription);

  // ✅ Make sure there is only ONE handleUpdate function
  const handleUpdate = (e) => {
    e.preventDefault();

    if (!title || !author || !description) {
      toast.error("All fields are required!");
      return;
    }

    const updatedReview = { id, title, body: description, author };
    
    dispatch(updateReview({ id, updatedReview }));
    toast.success("Review updated successfully!");
    navigate("/manage-reviews");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Edit Book Review</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Author</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Update Review
        </button>
      </form>
    </div>
  );
};

export default EditReview;
