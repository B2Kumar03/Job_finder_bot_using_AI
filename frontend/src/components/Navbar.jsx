import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdHistory } from "react-icons/md";
import { FaLaptopCode, FaBriefcase, FaUserAlt } from "react-icons/fa";
import icon from "../../public/assets/icons/icon.png";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const dummySuggestions = [
    "Software Engineer",
    "React Developer",
    "Mern Developer",
    "Frontend Developer",
    "Backend Developer",
    "Data Scientist",
    "Machine Learning Engineer",
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim()) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-blue-600 text-2xl font-bold">
              JobFinderAI
            </a>
          </div>

          {/* Search Bar */}
          <div className="relative w-full mx-4 lg:mx-8 flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for jobs, companies, or skills..."
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => setShowMenu(true)}
                onBlur={() => setTimeout(() => setShowMenu(false), 150)}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <AiOutlineSearch className="absolute top-2 left-3 text-gray-500 text-xl" />
            </div>

            {/* Search Suggestions/History */}
            {showMenu && (
              <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-2 w-full max-h-48 overflow-y-auto">
                <ul>
                  {searchTerm
                    ? dummySuggestions
                        .filter((item) =>
                          item.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => setSearchTerm(item)}
                          >
                            <AiOutlineSearch className="mr-2 text-gray-500" />
                            {item}
                          </li>
                        ))
                    : dummySuggestions.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => setSearchTerm(item)}
                        >
                          <MdHistory className="mr-2 text-gray-500" />
                          {item}
                        </li>
                      ))}
                </ul>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600 font-medium"
            >
              <FaLaptopCode className="text-2xl mb-1" />
              Features
            </a>
            <a
              href="#jobs"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600 font-medium"
            >
              <FaBriefcase className="text-2xl mb-1" />
              Jobs
            </a>
            <a
              href="/login"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600 font-medium"
            >
              <FaUserAlt className="text-2xl mb-1" />
              Login
            </a>
          </div>

          {/* Action Button */}
          <div className="ml-4">
            <a
              href="/signup"
              className="bg-blue-600 text-white px-4 py-4 rounded-lg hover:bg-blue-700"
            >
              SignUp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
