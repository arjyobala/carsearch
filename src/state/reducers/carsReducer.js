import * as types from "../types";
import { createReducer } from "@reduxjs/toolkit";

// export const getCarMakes = createAsyncThunk("posts/fetchPosts", async () => {
//   const response = await axios.get(
//     "https://https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
//   );
//   return response.cars;
// });

const carsReducer = createReducer(
  {},
  {
    [types.GET_CAR_MAKES_FULFILLED]: (state, action) => {
      state.carList = action.payload.Results;
    },
    [types.GET_CAR_MAKES_REJECTED]: (state, action) => {
      console.log(action.payload);
    },
  }
);

export default carsReducer;
