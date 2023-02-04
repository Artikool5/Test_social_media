import Users from "./Users/Users.jsx";
import { useEffect } from "react";
import axios from "axios";

export const GetUsersContainer = (props) => {
  const { currentPage, users, toggleFollowedStatus, isFetching } = props;

  useEffect(() => {
    axios
      .get(
        `https://randomuser.me/api/?page=${props.currentPage}&results=${props.pageSize}&seed=abc`
      )
      .then((response) => {
        props.setUsers(response.data.results);
        props.toggleIsFetching();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPageChange = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.toggleIsFetching();
    axios
      .get(
        `https://randomuser.me/api/?page=${pageNumber}&results=${props.pageSize}&seed=abc`
      )
      .then((response) => {
        props.setUsers(response.data.results);
        props.toggleIsFetching();
      });
  };

  return (
    <Users
      onPageChange={onPageChange}
      currentPage={currentPage}
      users={users}
      toggleFollowedStatus={toggleFollowedStatus}
      isFetching={isFetching}
      pageSize={props.pageSize}
    ></Users>
  );
};
