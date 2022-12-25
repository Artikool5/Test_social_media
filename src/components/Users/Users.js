import classes from "./Users.module.css";

const Users = (props) => {
  return props.users.map((user) => (
    <div className={classes.user} key={user.id}>
      <div className={classes.userAvatarContainer}>
        <img src={user.avatarURL} alt="Avatar" />
        <button
          onClick={() => {
            props.toggleFollowedStatus(user.id);
          }}
        >
          {user.followed ? "Follow" : "Unfollow"}
        </button>
      </div>
      <div className={classes.userInfo}>
        <div>{user.fullName}</div>
        <div className={classes.userLocation}>
          {user.location.country + ", " + user.location.city}
        </div>
        <div className={classes.userStatus}>{user.status}</div>
      </div>
    </div>
  ));
};

export default Users;
