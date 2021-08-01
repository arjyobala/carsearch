import * as types from "./types";
import axios from "axios";

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
