import React from "react";
import { FaBriefcase, FaLocationArrow, FaMoneyBillWave, FaBookmark } from "react-icons/fa";

const JobDetails = () => {
  const job = {
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Remote",
    salary: "$70,000 - $90,000 per year",
    description: `We are looking for a passionate Frontend Developer to join our team. 
      You will be working on exciting projects using modern tools and technologies.`,
    requirements: [
      "Proficient in HTML, CSS, and JavaScript.",
      "Experience with React.js and Tailwind CSS.",
      "Strong problem-solving and communication skills.",
    ],
    howToApply: "Submit your application through our website or send your resume to jobs@techsolutions.com.",
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
        <p className="text-lg text-gray-600">{job.company}</p>
        <div className="flex items-center gap-4 text-gray-500 mt-2">
          <span className="flex items-center gap-1">
            <FaLocationArrow /> {job.location}
          </span>
          <span className="flex items-center gap-1">
            <FaMoneyBillWave /> {job.salary}
          </span>
        </div>
      </header>

      {/* Job Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Description</h2>
        <p className="text-gray-600 leading-7">{job.description}</p>
      </section>

      {/* Job Requirements */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Requirements</h2>
        <ul className="list-disc list-inside text-gray-600">
          {job.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </section>

      {/* How to Apply */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Apply</h2>
        <p className="text-gray-600">{job.howToApply}</p>
      </section>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-600">
          Apply Now
        </button>
        <button className="bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 flex items-center gap-2">
          <FaBookmark /> Save Job
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
