import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export const getBlogs = () => API.get("/blogs");
export const getBlog = (id) => API.get(`/blogs/${id}`);
