import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userByIdSelector } from "../store/selectors/userDataSelector";
import { updateUserData } from "../store/actions/users";
import { updateUserPosts } from "../store/actions/posts";

const UserSection = ({ id, getPosts }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => userByIdSelector(state, id));
  const [sectionExpanded, setSectionExpanded] = useState(false);

  return (
    <>
      <div
        className="item-header"
      >
        {userData.name}
        <button
          onClick={() => setSectionExpanded(!sectionExpanded)}
        >
          {!sectionExpanded ? "Expand" : "Collapse"}
        </button>
      </div>
      {sectionExpanded && (
        <div
          key={userData.id}
          className="item-body"
        >
          <fieldset
            className="user-info"
          >
            <legend>Personal Info</legend>
            <div
              className="user-info-box"
            >
              <label>Name</label>
              <input
                value={userData.name}
                onChange={({ target: { value } }) =>
                  dispatch(
                    updateUserData({
                      ...userData,
                      name: value,
                    })
                  )
                }
              />
            </div>
            <div
              className="user-info-box"
            >
              <label>Username</label>
              <input
                value={userData.username}
                onChange={({ target: { value } }) =>
                  dispatch(
                    updateUserData({
                      ...userData,
                      username: value,
                    })
                  )
                }
              />
            </div>
            <div
              className="user-info-box"
            >
              <label>Email</label>
              <input
                value={userData.email}
                onChange={({ target: { value } }) =>
                  dispatch(
                    updateUserData({
                      ...userData,
                      email: value,
                    })
                  )
                }
              />
            </div>
            <div
              className="user-info-box"
            >
              <label>Website</label>
              <input
                value={userData.website}
                onChange={({ target: { value } }) =>
                  dispatch(
                    updateUserData({
                      ...userData,
                      website: value,
                    })
                  )
                }
              />
            </div>
            <div
              className="user-info-box"
            >
              <label>Phone</label>
              <input
                value={userData.phone}
                onChange={({ target: { value } }) =>
                  dispatch(
                    updateUserData({
                      ...userData,
                      phone: value,
                    })
                  )
                }
              />
            </div>
          </fieldset>
          <fieldset
            className="user-info"
          >
            <legend>Address</legend>
            <div
              className="user-info-box"
            >
              <label>Street</label>
              <input
                value={userData.address.street}
                onChange={({ target: { value } }) =>
                  dispatch(
                    updateUserData({
                      ...userData,
                      address: {
                        ...userData.address,
                        street: value,
                      },
                    })
                  )
                }
              />
            </div>
            <div
              className="user-info-box"
            >
              <label>Suite</label>
              <input
                value={userData.address.suite}
                onChange={({ target: { value } }) =>
                  dispatch(
                    updateUserData({
                      ...userData,
                      address: {
                        ...userData.address,
                        suite: value,
                      },
                    })
                  )
                }
              />
            </div>
            <div
              className="user-info-box"
            >
              <label>City</label>
              <input
                value={userData.address.city}
                onChange={({ target: { value } }) =>
                  dispatch(
                    updateUserData({
                      ...userData,
                      address: {
                        ...userData.address,
                        city: value,
                      },
                    })
                  )
                }
              />
            </div>
          </fieldset>
          <div
            className="user-posts-button"
          >
            <button
              style={{ marginTop: "10px" }}
              onClick={() =>
                !userData.posts.length
                  ? getPosts(id, userData)
                  : dispatch(updateUserPosts(userData, []))
              }
            >
              {!userData.posts.length
                ? "Get user’s posts"
                : "Hide user’s posts"}
            </button>
          </div>
          <div
            className="posts-container"
          >
            {!!userData.posts.length &&
              userData.posts.map((post, index) => (
                <div
                  key={index}
                  className="post-item"
                >
                  <h3>
                    {post.title}
                  </h3>
                  <div>{post.body}</div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(UserSection);
