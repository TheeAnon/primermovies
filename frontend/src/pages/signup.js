import React, { useState } from "react";
import googleLogo from "../images/google.png";
import fbLogo from "../images/fb.png";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../auth/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { firstName, lastName, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const { success, error } = await signup(formData);
      if (success) {
        setSuccess("Account created successfully. Logging you in...");
        const { success, error } = await login(formData);
        if (success) {
          setSuccess("Login success.");
          navigate("/", { replace: true });
        } else {
          setSuccess("");
          navigate("/login", { replace: true });
        }
      } else {
        setError(error);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 bg-black w-full h-full flex" style={{height: '100vh'}}>
      <div className="w-full sm:m-auto sm:max-w-lg h-full sm:h-auto">
        <form className="space-y-6 mb-4" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="normal-case text-4xl font-bold text-white">
            Create account
          </h1>
          { success && (<div role="alert" className="alert alert-success">
             <span>success}</span>
          </div>)}
          <div>
            <label
              for="firstName"
              className="text-sm font-medium text-gray-400"
            >
              First name
            </label>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => onChange(e)}
              id="firstName"
              placeholder="primer"
              className="border border-gray-800 mt-2 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 bg-black rounded placeholder-gray-400 text-gray-200"
            />
          </div>
          <div>
            <label for="lastName" className="text-sm font-medium text-gray-400">
              Last name
            </label>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => onChange(e)}
              id="lastName"
              placeholder="movies"
              className="border border-gray-800 mt-2 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 bg-black rounded placeholder-gray-400 text-white"
            />
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              value={email}
              autoComplete="off"
              onChange={(e) => onChange(e)}
              id="email"
              className="border border-gray-800 text-white text-sm focus:ring-blue-500 focus:border-blue-500 w-full rounded p-2.5 bg-black placeholder-gray-400"
              placeholder="example@primermovies.com"
            />
          </div>
          <div>
            <label for="password" className="text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength={6}
              id="password"
              placeholder="••••••••"
              className="border border-gray-800 mt-2 text-sm focus:ring-blue-500 focus:border-blue-500 w-full rounded p-2.5 bg-black placeholder-gray-400 text-white"
            />
          </div>
          <label className="label-text-alt text-red-500">{error&&error}</label>
          <div className="flex items-start">
            <a href="/login" className="text-sm text-blue-700 hover:underline">
              Already have an account? Login
            </a>
          </div>
          <button type="submit" className="btn w-full rounded-full" disabled={loading}>
            {loading?<span className="loading loading-infinity loading-lg"></span>:"Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
