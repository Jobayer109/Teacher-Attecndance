// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = ({ isLoggedIn, user }) => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <div className="flex items-center justify-center gap-2">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 rounded-md" />
        </Link>
        <p className="text-md text-black font-bold leading-tight">
          Teacher's <br /> Attendance
        </p>
      </div>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <div className="flex items-center space-x-2">
              <img
                src={user.avatar}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <span>{user.name}</span>
            </div>
            <Link
              to="/profile"
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
            >
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded uppercase font-semibold"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded uppercase font-semibold"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
