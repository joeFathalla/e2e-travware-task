import * as types from "../types";
const initialState = {
  blogs: [],
  blog: {},
  loading: false,
  error: null,
};

export const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BLOGS:
      return {
        ...state,
        blogs: action.blogs,
      };
    case types.GET_BLOG:
      return {
        ...state,
        blog: action.blog,
      };
    default:
      return state;
  }
};
