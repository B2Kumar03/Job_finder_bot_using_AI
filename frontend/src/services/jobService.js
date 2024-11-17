import api from "./api";

export const getJobs = async () => {
  const { data } = await api.get("/jobs");
  return data;
};

export const getJobDetails = async (jobId) => {
  const { data } = await api.get(`/jobs/${jobId}`);
  return data;
};

export const applyToJob = async (jobId, applicationData) => {
  const { data } = await api.post(`/jobs/${jobId}/apply`, applicationData);
  return data;
};

export const searchJobs = async (query) => {
  const { data } = await api.get(`/jobs/search`, { params: { query } });
  return data;
};
