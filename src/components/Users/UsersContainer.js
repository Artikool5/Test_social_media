import { connect } from "react-redux";
import Users from "./Users";
import { setUsersAC, toggleFollowedStatusAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    toggleFollowedStatus: (userId) => {
      dispatch(toggleFollowedStatusAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
