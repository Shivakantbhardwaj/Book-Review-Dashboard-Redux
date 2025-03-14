import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-5 text-xl font-bold">Book Review Dashboard</div>
      <nav className="mt-5">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/">📚 All Reviews</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/add-review">➕ Add Review</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/manage-reviews">⚙️ Manage Reviews</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
