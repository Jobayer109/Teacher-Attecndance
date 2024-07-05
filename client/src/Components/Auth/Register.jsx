import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const handleRegister = (data) => {
  console.log(data);
};

const Register = () => {
  const {
    register,
    handleSubmit,
    error,
    formState: { errors },
  } = useForm();

  return (
    <div className="text-center my-24">
      <h3 className="text-2xl font-semibold text-green-500 mb-6">Register</h3>
      <p className="text-xs text-red-600 text-center font-semibold">{error}</p>
      <form onSubmit={handleSubmit(handleRegister)}>
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
          placeholder="Your name"
          className="border w-80 p-3 text-sm rounded-md mt-2 border-green-500 outline-none"
        />{" "}
        {errors.name?.type === "required" && (
          <p className="text-xs text-red-700">Name is required</p>
        )}
        <br />
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="border w-80 p-3 text-sm rounded-md mt-2 border-green-500 outline-none"
        />{" "}
        {errors.email?.type === "required" && (
          <p className="text-xs text-red-700">Email is required</p>
        )}
        <br />
        <input
          type="password"
          name="password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
          })}
          placeholder="Password"
          className="border w-80 p-3 text-sm rounded-md mt-2 border-green-500 outline-none"
        />{" "}
        {errors.password?.type === "required" && (
          <p className="text-xs text-red-700">Password is required</p>
        )}
        <br />
        <select
          {...register("role", { required: true })}
          className="select select-bordered  border-green-500 w-80 mt-2 outline-none"
        >
          <option disabled defaultValue={"Select your role"}></option>
          <option>buyer</option>
          <option>seller</option>
        </select>
        <br />
        <input
          type="file"
          name="image"
          {...register("image", { required: true })}
          className="border w-80 p-3 text-sm rounded-md mt-2 border-green-500 outline-none"
        />{" "}
        {errors.image?.type === "required" && (
          <p className="text-xs text-red-700">Photo is required</p>
        )}
        <br />
        <input
          type="submit"
          value="Register"
          className="border w-80 bg-green-600 px-2 py-2 mt-5 rounded-md font-medium hover:bg-green-700 text-white"
        />
        <div className="w-[27%] mx-auto cursor-pointer ">
          <div className="divider  text-xs text-green-600">OR</div>
          <div
            // onClick={handleGoogleSignIn}
            className="md:flex lg:flex md:items-center lg:items-center md:border lg:border border-green-500 rounded-full p-1 hover:bg-green-200"
          >
            {/* <img src={google} alt="" className="h-8 mx-auto md:mx-0 lg:mx-0" /> */}
            <img src="" alt="" className="h-8 mx-auto md:mx-0 lg:mx-0" />
            <input
              type="button"
              value="Continue with google"
              className="md:ml-10 lg:ml-16  font-medium text-sm hidden md:block lg:block"
            />
          </div>
          <p className="text-xs mt-2">
            Already have an account ?{" "}
            <Link
              to="/login"
              className="text-green-600  text-sm  hover:underline"
            >
              please sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
