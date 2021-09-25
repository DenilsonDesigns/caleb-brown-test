import axios from "axios";

export const gexios = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});
