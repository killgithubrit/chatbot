import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white text-purple-600 p-4 relative">
      {/* Back Button to Homepage */}
      <Link 
        to="/"
        className="bg-gray-500 text-white py-2 px-4 rounded-md flex items-center absolute left-4 hover:bg-purple-400 transition-colors"
        aria-label="Go back to homepage"
      >
        <ArrowLeft size={16} className="mr-1" /> Back
      </Link>
      
      {/* Centered Title */}
      <h1 className="text-2xl font-bold text-center">Student Dashboard</h1>
    </header>
  );
};

export default Navbar;