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
        makes.id = item.Make_ID;
        return makes;
      });
      state.carList = list;
    },
    [types.GET_CAR_MAKES_REJECTED]: (state, action) => {
      console.log(action.payload);
    },
    [types.GET_CAR_MODELS_FULFILLED]: (state, action) => {
      // state.carList = action.payload.Results;
      const list = action.payload.Results.map((item) => {
        const models = {};
        models.value = item.Model_Name;
        models.id = item.Model_ID;
        return models;
      });
      state.carModels = list;
    },
    [types.GET_CAR_MODELS_REJECTED]: (state, action) => {
      console.log(action.payload);
    },
  }
);

export default carsReducer;
