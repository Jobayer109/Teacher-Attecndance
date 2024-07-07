// src/pages/Login.js
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState({ ...defaultValues });
  const navigate = useNavigate();

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData(defaultValues);

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error response:", errorText);
        throw new Error("Network response was not ok");
      }

      const result = await res.json();
      console.log(result);

      // Handle success (e.g., store token, navigate to dashboard, show a success message, etc.)
      localStorage.setItem("token", result.token);
      navigate("/");
      toast.success("Login successful", { position: "top-right" });
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "Login failed. Please check your credentials and try again.",
        { position: "top-right" }
      );
    }
  };

  return (
    <section className="flex flex-col items-center justify-center my-10">
      <div className="bg-white px-10 rounded shadow-lg w-96">
        <h3 className="text-2xl font-semibold text-green-600 my-6 text-center">
          Login
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="ই-মেইল"
              className="border w-full p-3 text-sm rounded-md border-gray-500 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="পাসওয়ার্ড"
              className="border w-full p-3 text-sm rounded-md border-gray-500 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="w-full bg-green-600 py-2 rounded-md font-medium hover:bg-green-700 text-white transition duration-200"
          />
        </form>
        <p className="text-xs my-4 text-center font-semibold text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-green-600 text-sm font-bold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
