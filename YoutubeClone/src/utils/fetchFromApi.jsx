import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,  // ✅ No need for `${}`
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, {
      params: options.params, // ✅ Corrected: Pass `params` separately
      headers: options.headers, // ✅ Corrected: Pass `headers` separately
    });

    console.log("API Response:", response.data); // Log response
    return response.data;
  } catch (error) {
    console.error("API Fetch Error:", error.response?.data || error.message);
    return null; // Handle API errors gracefully
  }
};
