import classes from "./Users.module.css";
import User from "./User/User";

const Users = (props) => {
  return (
    <section className={classes.usersPage}>
      <User />
    </section>
  );
};

export default Users;
