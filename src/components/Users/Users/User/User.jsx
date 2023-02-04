import React from "react";
import classes from "./User.module.css";
import userPhoto from "../../../../assets/images/defaultAvatar.webp";

export const User = (props) => {
  return (
    <>
      {props.users.map((user) => (
        <div className={classes.user} key={user.id.value}>
          <div className={classes.userAvatarContainer}>
            <img
              src={user.picture.thumbnail ? user.picture.thumbnail : userPhoto}
              alt="Avatar"
            />
            <button
              onClick={() => {
                props.toggleFollowedStatus(user.id);
              }}
            >
              {/*{user.followed ? "Unfollow" : "Follow"}*/}
              Follow
            </button>
          </div>
          <div className={classes.userInfo}>
            <div>{user.name.first + " " + user.name.last}</div>
            <div className={classes.userLocation}>
              {user.location.country + ", " + user.location.city}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
