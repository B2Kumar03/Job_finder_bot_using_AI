import React from "react";
import { FaBriefcase, FaBell, FaUser, FaChartPie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate=useNavigate()
  const stats = [
    { title: "Jobs Applied", value: 12, icon: <FaBriefcase size={24} /> },
    { title: "New Notifications", value: 3, icon: <FaBell size={24} /> },
    { title: "Profile Views", value: 48, icon: <FaUser size={24} /> },
    { title: "Matching Jobs", value: 25, icon: <FaChartPie size={24} /> },
  ];

  const recommendedJobs = [
    { title: "Frontend Developer", company: "Tech Solutions", location: "Remote" },
    { title: "Backend Engineer", company: "Innovate Labs", location: "New York" },
    { title: "Full Stack Developer", company: "Creative Coders", location: "San Francisco" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Overview of your activities and recommendations</p>
      </header>

      {/* Statistics Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg flex items-center gap-4"
          >
            <div className="text-primary">{stat.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Recommended Jobs Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendedJobs.map((job, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-600 text-sm">{job.location}</p>
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={()=>navigate("/jobdetails")} >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
