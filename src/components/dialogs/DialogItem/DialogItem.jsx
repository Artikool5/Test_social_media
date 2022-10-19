import classes from "./../Messages.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = `/messages/${props.id}`;
  return (
    <article className={`${classes.active}`}>
      <NavLink
        className={({ isActive }) =>
          (isActive ? classes.active : "") + " " + classes.dialog
        }
        to={path}
      >
        {props.name}
      </NavLink>
    </article>
  );
};

export default DialogItem;
