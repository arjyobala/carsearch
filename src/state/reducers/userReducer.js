import * as types from "../types";
import { createReducer } from "@reduxjs/toolkit";

// export const getCarMakes = createAsyncThunk("posts/fetchPosts", async () => {
//   const response = await axios.get(
//     "https://https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
//   );
//   return response.cars;
// });

const userReducer = createReducer(
  {},
  {
    [types.GET_USERS_FULFILLED]: (state, action) => {
      state.users = action.payload;
    },
    [types.GET_USERS_REJECTED]: (state, action) => {
      console.log(action.payload);
    },
  }
);

export default userReducer;
