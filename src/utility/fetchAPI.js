import axios from "axios";

export const fetchAPI = async (url) => {
  const btoken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjNjZDk4NjllZDRkMmM2ZjM2YWEwZTdkNDg1YjVmMyIsInN1YiI6IjY0ZTAzN2FhMzcxMDk3MDBlMjI5NzczNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BGWeWXQfn91oQ7a4jYLZM3AoeB9ktgDcbZ12vkHoSxk";
  const headers = { Authorization: `Bearer ${btoken}` };

  try {
    const response = await axios.get(url, { headers });
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
