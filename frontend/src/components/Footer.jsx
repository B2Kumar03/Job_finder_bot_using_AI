import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              JobFinderAI
            </h3>
            <p className="text-gray-400">
              Your AI-powered solution to finding the best jobs tailored to your
              skills and experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-800 text-gray-300"
              />
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 JobFinderAI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
