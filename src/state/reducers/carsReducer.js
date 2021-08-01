import * as types from "../types";
import { createReducer } from "@reduxjs/toolkit";

const carsReducer = createReducer(
  {},
  {
    [types.GET_CAR_MAKES_FULFILLED]: (state, action) => {
      // state.carList = action.payload.Results;
      state.carList = action.payload.Results;
    },
    [types.GET_CAR_MAKES_REJECTED]: (state, action) => {
      console.log(action.payload);
    },
  }
);

export default carsReducer;
