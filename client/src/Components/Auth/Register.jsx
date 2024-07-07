// src/pages/Register.js
import bcrypt from "bcryptjs";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  designation: "",
};

const Register = () => {
  const [formData, setFormData] = useState({ ...defaultValues });
  const navigate = useNavigate();

  const { name, email, password, designation } = formData;

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
      const hashedPassword = await bcrypt.hash(password, 10);
      const updatedFormData = { ...formData, password: hashedPassword };

      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(updatedFormData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(formData);

      if (!res.ok) {
        const errorText = await res.text(); // Get error response as text
        console.error("Error response:", errorText);
        throw new Error("Network response was not ok");
      }

      const result = await res.json();
      console.log(result);
      navigate("/login");
      toast.success("Registration successful", { position: "top-right" });
      // Handle success (e.g., navigate to login, show a success message, etc.)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <section className="flex flex-col items-center justify-center my-10">
      <div className="bg-white px-10 rounded shadow-lg w-96">
        <h3 className="text-2xl font-semibold text-green-600 my-6 text-center">
          Register
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="আপনার নাম"
              className="border w-full p-3 text-sm rounded-md border-gray-500 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
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
          <div className="mb-4">
            <select
              name="designation"
              value={designation}
              onChange={handleChange}
              className="border w-full p-3 text-xs rounded-md border-gray-500 outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" disabled>
                আপনার পদবি নির্বাচন করুন
              </option>
              <option>প্রধান শিক্ষক</option>
              <option>সহঃ প্রধান শিক্ষক</option>
              <option>সহকারী শিক্ষক</option>
            </select>
          </div>

          {/* <div className="mb-4">
            <input
              type="file"
              name="image"
              {...register("image", { required: "Photo is required" })}
              className="border w-full p-3 text-sm rounded-md border-gray-500 outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.image && (
              <p className="text-xs text-red-700 mt-1">
                {errors.image.message}
              </p>
            )}
          </div> */}
          <input
            type="submit"
            value="Register"
            className="w-full bg-green-600 py-2 rounded-md font-medium hover:bg-green-700 text-white transition duration-200"
          />
        </form>

        <p className="text-xs my-4 text-center font-semibold text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 text-sm font-bold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
