import { Pagination } from "./Pagination/Pagination";
import { Preloader } from "./Preloader/Preloader";
import { User } from "./User/User";
import classes from "./Users.module.css";

const Users = (props) => {
  let pages = [];
  let firstPageNumber, lastPageNumber;
  firstPageNumber = props.currentPage - 4 > 0 ? props.currentPage - 4 : 1;
  lastPageNumber =
    props.currentPage + 4 + Math.abs(props.currentPage - firstPageNumber - 4);
  for (let i = firstPageNumber; i <= lastPageNumber; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.usersContainer}>
      <Pagination
        pages={pages}
        currentPage={props.currentPage}
        onPageChange={props.onPageChange}
      />
      {props.isFetching ? (
        <Preloader pageSize={props.pageSize} />
      ) : (
        <User
          users={props.users}
          toggleFollowedStatus={props.toggleFollowedStatus}
        />
      )}
    </div>
  );
};

export default Users;
