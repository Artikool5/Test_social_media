import Users from "./Users/Users.jsx";
import { useEffect } from "react";
import axios from "axios";

export const GetUsersContainer = (props) => {
  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${props.currentPage}`
      )
      .then((response) => {
        props.setTotalUsersCount(response.data.totalCount);
        props.setUsers(response.data.items);
      });
  }, []);

  const onPageChange = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        props.setUsers(response.data.items);
      });
  };

  const { currentPage, users, toggleFollowedStatus } = props;

  return (
    <Users
      onPageChange={onPageChange}
      currentPage={currentPage}
      users={users}
      toggleFollowedStatus={toggleFollowedStatus}
    ></Users>
  );
};
