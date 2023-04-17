import axios from "axios";
import { API_URL } from "../constants/const";

export const requestSignUp = async (info) => {
  return await axios.post(`${API_URL}auth/signup`, info);
};

export const requestSignIn = async (info) => {
  return await axios.post(`${API_URL}auth/signin`, info);
};
