import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://trader-joes-shopping-list.herokuapp.com",
    headers: {
      authorization: token
    }
  });
};