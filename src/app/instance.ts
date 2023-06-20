import axios from "axios";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:7542/2.0/"
    : "https://neko-back.herokuapp.com/2.0/";

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
