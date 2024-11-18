import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const EditProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "",
    bio: "Software developer with 5+ years of experience in full-stack development.",
    skills: ["JavaScript", "React", "Node.js"],
  });

  const [newSkill, setNewSkill] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillAdd = () => {
    if (newSkill.trim()) {
      setUser((prev) => ({ ...prev, skills: [...prev.skills, newSkill] }));
      setNewSkill("");
    }
  };

  const handleSkillRemove = (skill) => {
    setUser((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the updated profile to the backend
    console.log("Updated User Data:", user);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-8 px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Edit Profile
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              {user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-2 border-blue-600 object-cover"
                />
              ) : (
                <div className="w-32 h-32 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center text-gray-500">
                  <FaCamera size={32} />
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <FaCamera size={28} className="text-white" />
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Bio */}
          <div className="mb-4">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleInputChange}
              rows={4}
              className="mt-1 p-2 border rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Skills */}
          <div className="mb-4">
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
              Skills
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-blue-600 text-white text-sm rounded-full flex items-center gap-2"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleSkillRemove(skill)}
                    className="text-white hover:text-gray-200"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add a new skill"
                className="p-2 border rounded-md flex-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={handleSkillAdd}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
