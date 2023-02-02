import Users from "./Users/Users.jsx";
import { useEffect } from "react";
import axios from "axios";

export const GetUsersContainer = (props) => {
  useEffect(() => {
    axios
      .get(
        `https://randomuser.me/api/?page=${props.currentPage}&results=${props.pageSize}&seed=abc`
      )
      .then((response) => {
        props.setUsers(response.data.results);
      });
  }, []);

  const onPageChange = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://randomuser.me/api/?page=${pageNumber}&results=${props.pageSize}&seed=abc`
      )
      .then((response) => {
        props.setUsers(response.data.results);
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
