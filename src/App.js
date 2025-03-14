import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddReview from "./pages/AddReview";
import ManageReviews from "./pages/ManageReviews";
import EditReview from "./pages/EditReview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-6 w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-review" element={<AddReview />} />
            <Route path="/manage-reviews" element={<ManageReviews />} />
            <Route path="/edit-review" element={<EditReview />} />
          </Routes>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
