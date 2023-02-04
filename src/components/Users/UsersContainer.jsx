import { connect } from "react-redux";
import {
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleFollowedStatusAC,
  toggleIsFetchingAC,
} from "../../redux/users-reducer.jsx";
import { GetUsersContainer } from "./GetUsersContainer.jsx";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
    toggleIsFetching: () => {
      dispatch(toggleIsFetchingAC());
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetUsersContainer);

export default UsersContainer;
