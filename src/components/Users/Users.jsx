import classes from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/defaultAvatar.webp";
import { useEffect } from "react";

const Users = (props) => {
  const onPageChange = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  useEffect(() => {
    if (props.users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${props.currentPage}`
        )
        .then((response) => {
          props.setTotalUsersCount(response.data.totalCount);
          props.setUsers(response.data.items);
        });
    }
  });

  let totalPageNumber = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  let firstPageNumber, lastPageNumber;
  lastPageNumber = props.currentPage + 5;
  props.currentPage - 5 <= 0 ? firstPageNumber = 1 : firstPageNumber = props.currentPage - 5;


  for (let i = firstPageNumber; i <= lastPageNumber; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages?.map((p) => (
        <span
          className={`${p === props.currentPage ? classes.selectedPage : ""} ${
            classes.page
          }`}
          onClick={(e) => {onPageChange(p)}}
        >
          {p}
        </span>
      ))}
      {props.users.map((user) => (
        <div className={classes.user} key={user.id}>
          <div className={classes.userAvatarContainer}>
            <img
              src={user.photos.small ? user.photos.small : userPhoto}
              alt="Avatar"
            />
            <button
              onClick={() => {
                props.toggleFollowedStatus(user.id);
              }}
            >
              {user.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
          <div className={classes.userInfo}>
            <div>{user.name}</div>
            <div className={classes.userLocation}>
              {/*{"user.location.country" + ", " + "user.location.city"}*/}
            </div>
            <div className={classes.userStatus}>{user.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
