import * as types from "./types";
import axios from "axios";

const vehicleUrl = `https://vpic.nhtsa.dot.gov/api/`;

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users`);
    dispatch({
      type: types.GET_USERS_FULFILLED,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: types.GET_USERS_REJECTED,
      payload: console.log(e),
    });
  }
};

export const getCarList = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${vehicleUrl}vehicles/getallmakes?format=json`
    );
    dispatch({
      type: types.GET_CAR_MAKES_FULFILLED,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: types.GET_CAR_MAKES_REJECTED,
      payload: console.log(e),
    });
  }
};

export const getCarModels = (makeName) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${vehicleUrl}/vehicles/GetModelsForMake/${makeName}?format=json`
    );
    dispatch({
      type: types.GET_CAR_MODELS_FULFILLED,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: types.GET_CAR_MODELS_REJECTED,
      payload: console.log(e),
    });
  }
};

export const getDogPhoto = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://dog.ceo/api/breeds/image/random`);
    dispatch({
      type: types.GET_DOG_PHOTO_FULFILLED,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: types.GET_DOG_PHOTO_REJECTED,
      payload: console.log(e),
    });
  }
};
