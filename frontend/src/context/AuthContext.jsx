import React, { createContext, useContext, useState, useEffect } from "react";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user information
  const [loading, setLoading] = useState(true); // Loading state for async actions

  // Simulate fetching user data (replace with real API logic)
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        // Example: Replace this with an actual API call to check user authentication
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Log in a user (replace with real API call)
  const login = async (credentials) => {
    try {
      // Simulate API call
      const fakeUser = { id: 1, name: "John Doe", email: credentials.email };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Let calling function handle errors
    }
  };

  // Log out the user
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
