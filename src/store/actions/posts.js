import {
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_FAIL,
  UPDATE_USER_POSTS,
} from "../actionTypes/index";
import axios from "../../utils/api";

export const fetchUserPostsRequest = () => ({
  type: FETCH_USER_POSTS_REQUEST,
});

export const updateUserPosts = (userData, posts) => ({
  type: UPDATE_USER_POSTS,
  payload: {
    ...userData,
    posts,
  },
});

export const fetchUserPostsFail = () => ({
  type: FETCH_USER_POSTS_FAIL,
});

export const fetchUserPosts = (id, userData) => async (dispatch) => {
  dispatch(fetchUserPostsRequest());
  try {
    const res = await axios.get(`/posts?userId=${id}`);
    dispatch(updateUserPosts(userData, res.data));
  } catch (error) {
    dispatch(fetchUserPostsFail(error.message));
  }
};
