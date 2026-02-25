import axios from "axios";

export const generateQuote = async (keyword) => {
  const response = await axios.post("http://127.0.0.1:8000/generate", {
    keyword: keyword,
  });
  return response.data.quote;
};