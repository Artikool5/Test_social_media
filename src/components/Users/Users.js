import classes from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/defaultAvatar.webp";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  return props.users.map((user) => (
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
          {user.followed ? "Follow" : "Unfollow"}
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
  ));
};

export default Users;
