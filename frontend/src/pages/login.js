import React, { useState } from "react";
import googleLogo from "../images/google.png";
import fbLogo from "../images/fb.png";
import { useNavigate } from "react-router-dom";
import { login } from "../auth/auth";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const { email, password } = formData;

  const onChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { success, error } = await login(formData);
      if (success) {
        navigate("/", { replace: true });
      } else {
        setError(error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 dark:bg-black w-full h-full flex">
      <div className="w-full sm:m-auto sm:max-w-lg h-full sm:h-auto">
        <h1 className="normal-case text-4xl font-bold dark:text-white">
          Login
        </h1>

        <div className="flex mt-6 w-full">
          <div className="w-full m-auto space-y-2 flex flex-col">
            <button className="btn btn-outline rounded">
              <img src={googleLogo} alt="google" width={20} height={20} />{" "}
              Continue with google
            </button>
            <button className="btn btn-outline rounded">
              <img src={fbLogo} alt="google" width={25} height={25} /> Continue
              with facebook
            </button>
          </div>
        </div>

        <div className="divider my-6">or continue with email and password</div>

        <form className="space-y-6 mb-4" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium dark:text-white"
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
              className="border dark:border-white dark:text-white text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-black placeholder-gray-400 rounded"
              placeholder="example@primermovies.com"
            />
          </div>
          <div>
            <label
              for="password"
              className="text-sm font-medium dark:text-white"
            >
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
              className="border dark:border-white mt-2 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-black placeholder-gray-400 dark:text-white rounded"
            />
          </div>
          {error && (
            <label className="label-text-alt text-red-500">{error}</label>
          )}
          <div className="flex items-start">
            <div className="flex items-start">
              <a
                href="/signup"
                className="text-sm text-blue-700 hover:underline"
              >
                Don't have an account? Signup
              </a>
            </div>
            <a
              href="/reset-password"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="btn w-full rounded-full dark:bg-white dark:text-black"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
