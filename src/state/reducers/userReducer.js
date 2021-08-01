import * as types from "../types";
import { createReducer } from "@reduxjs/toolkit";

const userReducer = createReducer(
  {},
  {
    [types.GET_USERS_FULFILLED]: (state, action) => {
      state.usersList = action.payload;
    },
    [types.GET_USERS_REJECTED]: (state, action) => {
      console.log(action.payload);
    },
  }
);

export default userReducer;
