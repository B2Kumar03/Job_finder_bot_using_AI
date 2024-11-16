import React, { useState } from "react";
import {  FaMicrosoft, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        {/* Toggle Login/Signup */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <p className="text-center text-gray-600 mb-6">
          {isLogin ? "Welcome back! Please login to continue." : "Create a new account to get started."}
        </p>

        {/* Form */}
        <form>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle between Login and Signup */}
        <p className="text-center text-gray-600 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-primary font-medium hover:underline"
            onClick={toggleForm}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="flex items-center justify-center text-[black] gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
            <FcGoogle className="text-red-500" />
            
            Google
          </button>
          <button className="flex items-center justify-center text-[black] gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
            <FaMicrosoft className="text-blue-600" />
            Microsoft
          </button>
          <button className="flex items-center justify-center gap-2 text-[black] border px-4 py-2 rounded-lg hover:bg-gray-100">
            <FaGithub className="text-gray-800" />
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
