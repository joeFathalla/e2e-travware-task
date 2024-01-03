import * as api from "../api";
import * as types from "../types";

export const getBlogs = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_BLOGS,
      blogs: null,
    });
    const { data } = await api.getBlogs();
    dispatch({
      type: types.RECIEVE_BLOGS,
      blogs: data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBlog = (id) => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_BLOG,
      blog: null,
    });
    const { data } = await api.getBlog(id);
    dispatch({
      type: types.RECIEVE_BLOG,
      blog: data.data,
    });
  } catch (error) {
    console.log(error);
  }
};
