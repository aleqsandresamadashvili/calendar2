import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignupStudent() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* LEFT SIDE */}
      <div className="flex-1 bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 p-10 flex flex-col justify-between">
        <button
          className="text-black flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <span className="text-xl">←</span> Back
        </button>

        <div className="mt-20">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Become A Student
          </h1>
          <p className="text-gray-700 text-lg max-w-sm">
            Ragac Texti Here, Will Get Filled Later
          </p>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <img
              src="https://flagcdn.com/gb.svg"
              alt="flag"
              className="w-8 h-8 rounded-sm"
            />
            <span className="text-lg">English</span>
          </div>

          <div className="flex gap-6 text-gray-700">
            <a href="#">Terms</a>
            <a href="#">Plans</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center items-center p-10">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
          <h2 className="text-2xl font-semibold text-center">
            Create Student Account
          </h2>
          <p className="text-center text-gray-600 mb-6">Start studying</p>

          {/* Google Button */}
          <button className="w-full py-3 border rounded-lg flex items-center justify-center gap-2 mb-4 hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-5 h-5"
              alt=""
            />
            Sign Up With Google
          </button>

          <button className="w-full py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/452196/facebook-1.svg"
              className="w-5 h-5"
              alt=""
            />
            Sign Up With Facebook
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">
              Or continue with email
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Create a Password (min. 8 characters)"
                className="w-full mt-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <p className="text-xs text-blue-600 mt-3">
            After signing up, you’ll complete your student profile with
            preferences.
          </p>

          {/* Terms */}
          <label className="flex items-center gap-2 mt-4 text-sm text-gray-700">
            <input type="checkbox" />I Accept the{" "}
            <span className="text-blue-600">Terms</span>
          </label>

          {/* Button */}
          <button className="w-full mt-5 bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition">
            Create Student Account
          </button>

          <p className="text-center text-sm text-gray-700 mt-4">
            Already Have An Account?{" "}
            <a
              className="text-blue-600"
              href="#"
              onClick={() => navigate("/login")}
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
