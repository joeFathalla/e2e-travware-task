import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await axios.get("http://localhost:3000/api/blogs");
  return response.data;
});

export const addNewBlog = createAsyncThunk(
  "blogs/addNewBlog",
  async (initialBlog) => {
    const response = await axios.post(
      "http://localhost:3000/api/blogs",
      initialBlog
    );
    return response.data;
  }
);
export const fetchBlog = createAsyncThunk("blogs/fetchBlog", async (blogId) => {
  const response = await axios.get(`http://localhost:3000/api/blogs/${blogId}`);
  return response.data;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload.blogs;
      })
      .addCase(addNewBlog.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addNewBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addNewBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.push(action.payload.blog);
      });
  },
});

export const selectAllBlogs = (state) => state.blogs.blogs;

export const selectBlogById = (state, blogId) =>
  state.blogs.blogs.find((blog) => blog.id === blogId);

export const { addBlogs, addBlog, updateBlog, deleteBlog } = blogsSlice.actions;
export default blogsSlice.reducer;
