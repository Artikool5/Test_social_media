import classes from "./menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className={classes.menu}>
      <menu>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/messages"
          >
            Messages
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/music"
          >
            Music
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/users"
          >
            Find users
          </NavLink>
        </li>
      </menu>
    </nav>
  );
};

export default Menu;
