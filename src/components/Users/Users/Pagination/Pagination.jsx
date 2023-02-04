import React from "react";
import classes from "./Pagination.module.css";

export const Pagination = (props) => {
  return (
    <nav>
      {props.currentPage >= 6 ? (
        <span>
          <span
            className={classes.pageNumber}
            onClick={() => {
              props.onPageChange(1);
            }}
          >
            {1}
          </span>
          <span className={classes.pageNumber}>...</span>
        </span>
      ) : (
        ""
      )}
      {props.pages?.map((p) => (
        <span
          className={`${p === props.currentPage ? classes.selectedPage : ""} ${
            classes.pageNumber
          }`}
          onClick={() => {
            props.onPageChange(p);
          }}
        >
          {p}
        </span>
      ))}
    </nav>
  );
};
