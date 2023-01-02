import { connect } from "react-redux";
import Users from "./Users/Users.jsx";
import {
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleFollowedStatusAC,
} from "../../redux/users-reducer.jsx";
import { GetUsersContainer } from "./GetUsersContainer.jsx";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetUsersContainer);

export default UsersContainer;
