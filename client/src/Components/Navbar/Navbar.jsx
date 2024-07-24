// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = ({ isLoggedIn, user }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 shadow-xl">
      <Link to="/">
        <div className="flex items-center justify-center gap-1 shadow-sm p-1 rounded-md">
          <img
            src={logo}
            alt="logo"
            className="h-12 rounded-sm border-y-2  border-red-900"
          />

          <p className=" hidden md:block text-md text-red-900 font-bold font-sans leading-tight p-1">
            Teacher's <br /> Attendance
          </p>
        </div>
      </Link>
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

            <Link
              to="/logout"
              className="fancy-button bg-red-800 text-white px-4 py-2 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-red-800 font-semibold"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/register"
              className="fancy-button bg-red-800 text-white px-4 py-2 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-red-800 font-semibold"
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
