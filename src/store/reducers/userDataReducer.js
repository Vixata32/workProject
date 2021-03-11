import {
  UPDATE_USER_DATA,
  UPDATE_USER_POSTS,
  FETCH_USERS_SUCCESS,
} from "../actionTypes/index";

const initialState = [];

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload
        ? action.payload.map((user) => ({
            ...user,
            posts: [],
          }))
        : [];

    case UPDATE_USER_DATA: {
      const userIndex = state.findIndex(
        (user) => user.id === action.payload.id
      );
      const newState = [...state];
      newState[userIndex] = action.payload;
      return newState;
    }
    case UPDATE_USER_POSTS: {
      const userIndex = state.findIndex(
        (user) => user.id === action.payload.id
      );
      const newState = [...state];
      newState[userIndex] = {
        ...newState[userIndex],
        posts: action.payload.posts,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default userDataReducer;
