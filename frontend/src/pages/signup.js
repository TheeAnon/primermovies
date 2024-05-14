import React, { useState } from "react";
import googleLogo from "../images/google.png";
import fbLogo from "../images/fb.png";
import { useNavigate } from "react-router-dom";

const Signup = ({ error}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const { firstName, lastName, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const Signup = async (e) =>{
    e.preventDefault();

    const response = await fetch("http://localhost:1337/api/signup", {
       method: "POST",
       headers: {
          "Content-Type": "application/json",
       },
       body: JSON.stringify(formData),
    });

    const data = await response.json();
  };

  const navigate = useNavigate();

  return (
    <div className="p-4 bg-black w-full h-full flex">
      <div className="w-full sm:m-auto sm:max-w-lg h-full sm:h-auto">
        <form className="space-y-6 mb-4" onSubmit={(e) => Signup(e)}>
          <h1 className="normal-case text-4xl font-bold text-white">Create account</h1>
          <div>
            <label for="firstName" className="text-sm font-medium text-white">First Name</label>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => onChange(e)}
              id="firstName"
              placeholder="Primer"
	      className="border border-white mt-2 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 bg-black rounded placeholder-gray-400 text-white"
            />
          </div>
          <div>
            <label for="lastName" className="text-sm font-medium text-white">Last Name</label>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => onChange(e)}
              id="lastName"
              placeholder="Movies"
              className="border border-white mt-2 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 bg-black rounded placeholder-gray-400 text-white"
            />
          </div>
          <div>
            <label for="email"className="block mb-2 text-sm font-medium text-white">Email</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              autoComplete="off"
              onChange={(e) => onChange(e)}
              id="email"
              className="border border-white text-white text-sm focus:ring-blue-500 focus:border-blue-500 w-full rounded p-2.5 bg-black placeholder-gray-400"
              placeholder="info@primermovies.com"
            />
          </div>
          <div>
            <label for="password" className="text-sm font-medium text-white">Password</label>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength={6}
              id="password"
              placeholder="••••••••"
              className="border border-white mt-2 text-sm focus:ring-blue-500 focus:border-blue-500 w-full rounded p-2.5 bg-black placeholder-gray-400 text-white"
            />
          </div>
          {error && (
            <label className="label-text-alt text-red-500">{error}</label>
          )}
          <div className="flex items-start">
            <a href="/login" className="text-sm text-blue-700 hover:underline">Already have an account? Login</a>
          </div>
          <button type="submit" className="btn btn w-full rounded-full bg-white text-black">
            Sign up
          </button>
        </form>
        <div className="divider mt-6 text-[#F5F5DC]">or continue with</div>
        <div className="flex mt-6 w-full">
          <div className="m-auto space-x-2 flex">
            <button
              className="btn btn-square hover:bg-white btn-outline border-[#F5F5DC] p-1 rounded-none"
            >
              <img src={googleLogo} alt="google" width={20} height={20} />
            </button>
            <button className="btn btn-square btn-outline hover:bg-white border-[#F5F5DC] p-1 rounded-none">
              <img src={fbLogo} alt="google" width={25} height={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
