import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
/*import axios from "../utils/api.js";
import { UPDATE_USER_DATA } from "../store/actionTypes/";*/
import userDataSelector from "../store/selectors/userDataSelector";
import UserSection from "./UserSection";
import { fetchUsers } from "../store/actions/users";
import { fetchUserPosts } from "../store/actions/posts";

const Users = () => {
  const dispatch = useDispatch();
  const userData = useSelector(userDataSelector);

  // const getPosts = async (id, userData) => {
  //   try {
  //     const res = await axios.get(`/posts?userId=${id}`);
  //     dispatch({
  //       type: UPDATE_USER_DATA,
  //       payload: {
  //         ...userData,
  //         posts: res.data,
  //       },
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const getPosts = (id, userData) => dispatch(fetchUserPosts(id, userData));

  useEffect(() => {
    dispatch(fetchUsers());
    // async function getUsers() {
    //   try {
    //     const res = await axios.get("/users");
    //     dispatch({
    //       type: ADD_FETCHED_DATA,
    //       payload: res.data,
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    // getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return userData && !!userData.length ? (
    <div>
      {userData.map((user) => (
        <UserSection getPosts={getPosts} key={user.id} id={user.id} />
      ))}
    </div>
  ) : (
    <div>No data</div>
  );
};

export default Users;
