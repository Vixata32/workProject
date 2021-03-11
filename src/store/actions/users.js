import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  UPDATE_USER_DATA,
} from "../actionTypes/index";
import axios from "../../utils/api";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFail = (error) => ({
  type: FETCH_USERS_FAIL,
  payload: error,
});

export const updateUserData = (value) => ({
  type: UPDATE_USER_DATA,
  payload: value,
});

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const res = await axios.get("/users");
    dispatch(fetchUsersSuccess(res.data));
  } catch (error) {
    dispatch(fetchUsersFail(error.message));
  }
};
