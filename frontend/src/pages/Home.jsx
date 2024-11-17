import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AiOutlineCheckCircle, AiOutlineBell, AiOutlineAppstoreAdd } from "react-icons/ai";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
     
      <div className="relative bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Animated Background */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-30 z-0"
          style={{
            backgroundImage: "url('https://cdn.dribbble.com/users/1373613/screenshots/5385718/siri-____.gif')",
          }}
        ></div>

        {/* Hero Section */}
        <section className="text-center max-w-4xl z-10">
          <h1 className="text-secondary text-5xl font-bold mb-6 relative">
            Welcome to <span className="text-primary">AI Job Finder</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Discover jobs tailored to your skills and experience with the power of AI.
          </p>
          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
              onClick={() => navigate("/dashboard")}
            >
              Get Started
            </button>
            <button className="bg-accent text-white py-3 px-6 rounded-lg hover:bg-yellow-500 transition transform hover:scale-105">
              Learn More
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full z-10">
          {/* Feature Card */}
          <div className="p-6 bg-white shadow-md rounded-lg flex items-center gap-4">
            <AiOutlineCheckCircle className="text-primary text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Personalized Recommendations
              </h3>
              <p className="text-gray-600">
                Get job recommendations based on your skills and experience.
              </p>
            </div>
          </div>
          {/* Feature Card */}
          <div className="p-6 bg-white shadow-md rounded-lg flex items-center gap-4">
            <AiOutlineBell className="text-accent text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Notifications and Alerts
              </h3>
              <p className="text-gray-600">
                Stay updated with real-time notifications about new job postings.
              </p>
            </div>
          </div>
          {/* Feature Card */}
          <div className="p-6 bg-white shadow-md rounded-lg flex items-center gap-4">
            <AiOutlineAppstoreAdd className="text-blue-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Easy Application Process
              </h3>
              <p className="text-gray-600">
                Apply to jobs with a single click and track your applications easily.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
