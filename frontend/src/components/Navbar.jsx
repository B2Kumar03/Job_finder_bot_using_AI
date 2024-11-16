import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-primary text-2xl font-bold">
              JobFinderAI
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-primary font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-primary font-medium"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-primary font-medium"
            >
              Contact
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="/login"
              className="text-gray-600 hover:text-primary font-medium"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-primary focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
