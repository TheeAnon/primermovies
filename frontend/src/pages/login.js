import React, { useState } from "react";
import googleLogo from "../images/google.png";
import fbLogo from "../images/fb.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ error }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: "",
  });

  const { email, password, remember } = formData;

  const onChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const continueWithGoogle = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://127.0.0.1:8000`
      )
      .then((response) => {
        window.location.replace(response.data.authorization_url);
      })
      .catch((google_error) => {});
  };

  const navigate = useNavigate();

  return (
    <div className="p-4 dark:bg-black w-full pt-20 h-full flex">
      <div className="w-full sm:m-auto sm:max-w-lg h-full sm:h-auto">
        <form className="space-y-6 mb-4" onSubmit={(e) => onSubmit(e)}>
          <h1 className="normal-case text-4xl font-bold dark:text-white">Login</h1>
          <div>
            <label for="email"className="block mb-2 text-sm font-medium dark:text-white">Email</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              autoComplete="off"
              onChange={(e) => onChange(e)}
              id="email"
              className="border dark:border-white dark:text-white text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-black placeholder-gray-400 rounded"
              placeholder="example@primermovies.com"
            />
          </div>
          <div>
            <label for="password" className="text-sm font-medium dark:text-white">Password</label>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength={6}
              id="password"
              placeholder="••••••••"
              className="border dark:border-white mt-2 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-black placeholder-gray-400 dark:text-white rounded"
            />
          </div>
          {error && (
            <label className="label-text-alt text-red-500">{error}</label>
          )}
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
	          onChange={(e) => onChange(e)}
                  className="w-4 h-4 border border-white focus:ring-3 rounded"
                />
              </div>
              <label for="remember" className="ml-2 text-sm font-medium text-white">
                Remember me
              </label>
            </div>
            <a
              href="/reset-password"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="btn btn w-full rounded-full bg-white text-black">
            Login
          </button>
        </form>
        <a href="/signup" className="text-sm text-blue-700 hover:underline">Don't have an account? Signup</a>
        <div className="divider mt-6 text-[#F5F5DC]">or continue with</div>
        <div className="flex mt-6 w-full">
          <div className="m-auto space-x-2 flex">
            <button
              className="btn btn-square hover:bg-white btn-outline p-1 rounded border-[#F5F5DC]"
              onClick={continueWithGoogle}
            >
              <img src={googleLogo} alt="google" width={20} height={20} />
            </button>
            <button className="btn btn-square btn-outline hover:bg-white p-1 rounded border-[#F5F5DC]">
              <img src={fbLogo} alt="google" width={25} height={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
