import * as types from "../types";
import { createReducer } from "@reduxjs/toolkit";
import { List } from "antd";

const carsReducer = createReducer(
  {},
  {
    [types.GET_CAR_MAKES_FULFILLED]: (state, action) => {
      // state.carList = action.payload.Results;
      const list = action.payload.Results.map((item) => {
        const makes = {};
        makes.value = item.Make_Name;
        return makes;
      });
      state.carList = list;
    },
    [types.GET_CAR_MAKES_REJECTED]: (state, action) => {
      console.log(action.payload);
    },
  }
);

export default carsReducer;
