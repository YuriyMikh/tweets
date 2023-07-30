import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://64c664800a25021fde9196a9.mockapi.io",
});

export const fetchUsers = async () => {
  const { data } = await usersApi.get("/users");
  return data;
};
