import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-6">Oops! Page not found.</p>
        <p className="text-gray-500 mb-8">The page you are looking for does not exist or has been moved.</p>
        <a href="/" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-200">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
