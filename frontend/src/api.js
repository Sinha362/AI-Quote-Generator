import axios from "axios";

export const generateQuote = async (keyword) => {
  const response = await axios.post("http://192.168.0.116:8000/generate", {
    keyword: keyword,
  });
  return response.data.quote;
};