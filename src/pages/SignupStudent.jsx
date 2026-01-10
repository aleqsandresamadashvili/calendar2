import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupTeacher() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async () => {
    setLoading(true);
    setErrorMsg("");

    try {
      const names = fullName.trim().split(" ");
      const firstName = names[0] || "";
      const lastName = names.slice(1).join(" ") || "";
      const username = email.split("@")[0];

      const res = await fetch(
        "http://memora-alb-877723400.eu-central-1.elb.amazonaws.com/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            username,
            password,
            firstName,
            lastName,
            role: "STUDENT",
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        setErrorMsg(err?.message || "Registration failed");
        setLoading(false);
        return;
      }
      const data = await res.json();

      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      localStorage.setItem("expires_in", data.expires_in);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/login");
    } catch (err) {
      setErrorMsg("Something went wrong. Try again.");
    }

    setLoading(false);
  };

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
            Become A Teacher
          </h1>
          <p className="text-gray-700 text-lg max-w-sm">
            Enter your details to create a teacher account.
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
            Create Teacher Account
          </h2>
          <p className="text-center text-gray-600 mb-6">Start teaching</p>

          {/* FORM */}
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                className="w-full mt-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a Password (min. 8 characters)"
                className="w-full mt-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* ERROR */}
          {errorMsg && <p className="text-red-500 text-sm mt-3">{errorMsg}</p>}

          <label className="flex items-center gap-2 mt-4 text-sm text-gray-700">
            <input type="checkbox" />I Accept the{" "}
            <span className="text-blue-600">Terms</span>
          </label>

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full mt-5 bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition disabled:bg-gray-400"
          >
            {loading ? "Creating..." : "Create Teacher Account"}
          </button>

          <p className="text-center text-sm text-gray-700 mt-4">
            Already Have An Account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
