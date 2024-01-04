import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogs: null,
  blog: null,
  loading: false,
  isDeleted: false,
  isCreated: false,
  isUpdated: false,
  fetchLoading: false,
  error: null,
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await axios.get("http://localhost:3000/api/blogs");
  return response.data;
});

export const addNewBlog = createAsyncThunk("blogs/addNewBlog", async (blog) => {
  const response = await axios.post("http://localhost:3000/api/blogs", blog);
  return response.data;
});
export const fetchBlog = createAsyncThunk("blogs/fetchBlog", async (blogId) => {
  const response = await axios.get(`http://localhost:3000/api/blogs/${blogId}`);
  return response.data;
});
export const updateBlog = createAsyncThunk("blogs/updateBlog", async (data) => {
  const response = await axios.put(
    `http://localhost:3000/api/blogs/${data.id}`,
    data.blog
  );
  return response.data;
});
export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async (blogId) => {
    const response = await axios.delete(
      `http://localhost:3000/api/blogs/${blogId}`
    );
    return response.data;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.fetchLoading = true;
        state.isCreated = false;
        state.blogs = null;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.error = null;
        state.blogs = action.payload.blogs;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.fetchLoading = false;
        state.error = action.error.message;
      })

      .addCase(addNewBlog.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addNewBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addNewBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.isCreated = true;
        state.error = null;
      })

      .addCase(fetchBlog.pending, (state, action) => {
        state.fetchLoading = true;
        state.loading = null;
        state.error = null;
        state.blog = null;
        state.isCreated = false;
        state.isDeleted = false;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.error = null;
        state.blog = action.payload.blog;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.fetchLoading = false;
        state.error = action.error.message;
      })

      .addCase(updateBlog.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.isUpdated = true;
        state.error = null;
      })

      .addCase(deleteBlog.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.isDeleted = true;
        state.error = null;
      });
  },
});

export const selectAllBlogs = (state) => state.blogs.blogs;

export const selectBlogById = (state, blogId) =>
  state.blogs.blogs.find((blog) => blog.id === blogId);

export default blogsSlice.reducer;
