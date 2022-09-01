import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  //destructuro la respuesta directamente, y le paso la key mas la url que serian las distintas opciones, y como segundo arg las options con el param y headers
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
