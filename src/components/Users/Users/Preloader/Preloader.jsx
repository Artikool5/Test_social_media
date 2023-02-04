import React from "react";
import classes from "./Preloader.module.css";

export const Preloader = (props) => {
  let usersPlaceholders = [];
  for (let i = 0; i < props.pageSize; i++) {
    usersPlaceholders.push(i);
  }
  return (
    <>
      {usersPlaceholders.map((placeholder, i) => (
        <div className={`${classes.user} `} key={i}>
          <div className={`${classes.userAvatarContainer} `}>
            <div className={`${classes.userAvatar} ${classes.shimmer}`}></div>
            <button className={`${classes.shimmer}`}>Follow</button>
          </div>
          <div className={`${classes.userInfo} ${classes.shimmer}`}>
            <div className={`${classes.userName} ${classes.shimmer}`}></div>
            <div className={`${classes.userLocation} ${classes.shimmer}`}></div>
          </div>
        </div>
      ))}
    </>
  );
};
