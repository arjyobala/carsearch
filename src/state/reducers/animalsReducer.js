import * as types from "../types";
import { createReducer } from "@reduxjs/toolkit";

const animalsReducer = createReducer(
  {},
  {
    [types.GET_DOG_PHOTO_FULFILLED]: (state, action) => {
      state.dogPhoto = action.payload.message;
    },
    [types.GET_DOG_PHOTO_REJECTED]: (state, action) => {
      console.log(action.payload);
    },
  }
);

export default animalsReducer;
