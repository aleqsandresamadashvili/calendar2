import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch(
        "http://memora-alb-877723400.eu-central-1.elb.amazonaws.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        setErrorMsg(err?.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      const data = await res.json();
      console.log("Login success:", data);

      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      localStorage.setItem("expires_in", data.expires_in);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/");
    } catch (error) {
      setErrorMsg("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="flex-1 bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 p-10 flex flex-col justify-between">
        <button
          className="text-black flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <span className="text-xl">←</span> Back
        </button>

        <div className="mt-24">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Welcome Back !
          </h1>
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

      <div className="flex-1 flex justify-center items-center p-10">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
          <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
          <p className="text-center text-gray-600 mb-6">
            Log in to manage your lessons
          </p>

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

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">
              Or continue with email
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
            />
            <a href="#" className="text-sm text-purple-500 float-right mt-1">
              Forgot?
            </a>
          </div>

          {errorMsg && <p className="text-red-500 text-sm mb-2">{errorMsg}</p>}

          <button
            className="w-full mt-6 bg-purple-400 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-500 transition disabled:bg-gray-400"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          <p className="text-center text-sm text-gray-700 mt-6">
            Don’t Have An Account?
          </p>
          <p className="text-center text-sm mt-1">
            <a
              href="#"
              className="text-blue-600 font-medium"
              onClick={() => navigate("/signup-student")}
            >
              Sign Up As A Student
            </a>{" "}
            or{" "}
            <a
              href="#"
              className="text-blue-600 font-medium"
              onClick={() => navigate("/signup-tutor")}
            >
              Sign Up As A Tutor
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
