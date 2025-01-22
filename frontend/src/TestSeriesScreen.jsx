import React from 'react';
import cuetIcon from "./cuet.png"

const TestSeriesScreen = () => {
  const testSeries = Array.from({ length: 10 }, (_, i) => `Test series ${i + 1}`);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <header className="flex items-center justify-center gap-4 mb-8">
        <img
          src={cuetIcon}
          alt="CUET Logo"
          className="w-16 h-16 rounded-full"
        />
        <h1 className="text-3xl font-bold text-blue-800">
          CUET PG MCA (SCQP09)
        </h1>
      </header>

      {/* Test Series Grid */}
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-6">
        {testSeries.map((series, index) => (
          <div
            key={index}
            className="bg-red-300 h-[200px] hover:bg-red-400 text-white text-center p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition"
          >
            {series}
          

          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSeriesScreen;
