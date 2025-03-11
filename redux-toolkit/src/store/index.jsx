import { combineReducers } from "@reduxjs/toolkit";
import posts from "./posts";
import users from "./users";

export default combineReducers({
  posts,
  users,
});
