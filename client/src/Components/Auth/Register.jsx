// src/pages/Register.js
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import googleLogo from "../../assets/google-logo.png";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    // Handle register logic
    console.log(data);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen mb-10">
      <div className="bg-white px-5 rounded shadow-md w-96">
        <h3 className="text-2xl font-semibold text-green-600 mb-6 text-center">
          Register
        </h3>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              {...register("name", { required: "Name is required" })}
              placeholder="আপনার নাম"
              className="border w-full p-3 text-sm rounded-md border-gray-500 outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.name && (
              <p className="text-xs text-red-700 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              {...register("email", { required: "Email is required" })}
              placeholder="ই-মেইল"
              className="border w-full p-3 text-sm rounded-md border-gray-500 outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <p className="text-xs text-red-700 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "Password is required",
                // pattern: {
                //   value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
                //   message:
                //     "Password must contain uppercase, lowercase, and number",
                // },
              })}
              placeholder="পাসওয়ার্ড"
              className="border w-full p-3 text-sm rounded-md border-gray-500 outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.password && (
              <p className="text-xs text-red-700 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <select
              {...register("role", { required: "Role is required" })}
              className="border w-full p-3 text-xs rounded-md border-gray-500 outline-none focus:ring-2 focus:ring-green-500"
              defaultValue=""
            >
              <option value="" disabled>
                আপনার পদবি নির্বাচন করুন
              </option>
              <option>প্রধান শিক্ষক</option>
              <option>সহঃ প্রধান শিক্ষক</option>
              <option>সহকারী শিক্ষক</option>
            </select>
            {errors.role && (
              <p className="text-xs text-red-700 mt-1">{errors.role.message}</p>
            )}
          </div>

          <div className="mb-4">
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
          </div>

          <input
            type="submit"
            value="Register"
            className="w-full bg-green-600 py-2 rounded-md font-medium hover:bg-green-700 text-white transition duration-200"
          />
        </form>
        <div className="mt-6 flex items-center justify-center">
          <div className="w-full border-t border-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">OR</span>
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="flex items-center justify-center">
          <img src={googleLogo} alt="Google" className="h-8 mr-2 mt-4 " />
        </div>
        <p className="text-xs my-4 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 text-sm font-bold hover:underline"
          >
            Please sign in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
