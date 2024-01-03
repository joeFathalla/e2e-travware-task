import { combineReducers } from "redux";
import { blogsReducer } from "./blogsReducer";

export default combineReducers({
  blogs: blogsReducer,
});
