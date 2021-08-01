import { combineReducers } from "redux";
import animalsReducer from "./animalsReducer";
import carsReducer from "./carsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  cars: carsReducer,
  users: userReducer,
  animals: animalsReducer,
});
