import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate(); // Add this line to use navigate hook
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "", // Leave blank to show the upload icon
    bio: "Experienced full-stack developer specializing in building scalable web applications and APIs.",
    jobTitle: "Senior Software Engineer",
    location: "San Francisco, CA",
    skills: ["JavaScript", "React", "Node.js", "Python", "TypeScript"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  };

  return (
    <div className="min-h-screen  bg-gray-50 flex justify-center items-center py-8 px-4">
      <div className="bg-white  shadow-lg rounded-lg w-full  p-8">
        {/* Header Section */}
        <div className="flex items-center gap-8">
          {/* Profile Picture */}
          <div className="relative group">
            {user.profilePicture ? (
              <img
                src={user.profilePicture}
                alt={`${user.name}'s profile`}
                className="w-32 h-32 rounded-full border-2 border-blue-600 object-cover"
              />
            ) : (
              <div className="w-32 h-32 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center text-gray-500">
                <FaCamera size={32} />
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FaCamera size={28} className="text-white" />
            </div>
          </div>
          {/* User Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-blue-600 font-medium">{user.jobTitle}</p>
            <p className="text-gray-600 mt-1">{user.location}</p>
            <p className="text-gray-600 mt-1">{user.email}</p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">About</h2>
          <p className="text-gray-600 mt-2">{user.bio}</p>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">Connect</h2>
          <div className="flex gap-4 mt-4">
            {user.socialLinks.linkedin && (
              <a
                href={user.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin size={28} />
              </a>
            )}
            {user.socialLinks.github && (
              <a
                href={user.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600"
              >
                <FaGithub size={28} />
              </a>
            )}
            {user.socialLinks.twitter && (
              <a
                href={user.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <FaTwitter size={28} />
              </a>
            )}
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700" onClick={()=>{
            navigate("/editprofile")
          }}>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
