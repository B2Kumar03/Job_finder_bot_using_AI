import React from "react";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "https://via.placeholder.com/150", // Replace with actual URL
    bio: "Software developer with 5+ years of experience in full-stack development.",
    skills: ["JavaScript", "React", "Node.js", "Python"],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className="bg-white shadow-md rounded-lg max-w-2xl w-full p-6">
        {/* Profile Picture and Name */}
        <div className="flex items-center gap-6">
          <img
            src={user.profilePicture}
            alt={`${user.name}'s profile`}
            className="w-24 h-24 rounded-full border-2 border-primary"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">Bio</h2>
          <p className="text-gray-600 mt-2">{user.bio}</p>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-primary text-white text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-8 text-center">
          <button className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-purple-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
