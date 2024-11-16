import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Job Details */}
      <div className="p-4">
        {/* Job Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {job.title}
        </h3>
        
        {/* Company Name */}
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium text-gray-700">Company:</span> {job.company}
        </p>

        {/* Location */}
        <p className="text-sm text-gray-600 mb-3">
          <span className="font-medium text-gray-700">Location:</span> {job.location}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <a
            href={job.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-sm font-medium"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
