import { combineReducers } from "redux";
import carsReducer from "./carsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  cars: carsReducer,
  users: userReducer,
});
