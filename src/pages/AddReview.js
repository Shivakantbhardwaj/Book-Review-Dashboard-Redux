import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addReview } from "../redux/reviewSlice";
import { toast } from "react-toastify";

const AddReview = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !description) {
      toast.error("All fields are required!");
      return;
    }

    const newReview = { id: Date.now(), title, body: description, author };

    dispatch(addReview(newReview));
    toast.success("Review added successfully!");
    navigate("/");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add a New Book Review</h2>
      <form onSubmit={handleSubmit}>
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
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
