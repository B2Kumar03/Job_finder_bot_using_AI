import api from "./api";

export const login = async (credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  localStorage.setItem("authToken", data.token);
  return data;
};

export const signup = async (userDetails) => {
  const { data } = await api.post("/auth/signup", userDetails);
  return data;
};

export const logout = () => {
  localStorage.removeItem("authToken");
};

export const getUserProfile = async () => {
  const { data } = await api.get("/auth/profile");
  return data;
};
