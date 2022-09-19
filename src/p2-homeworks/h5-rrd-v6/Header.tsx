import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "./Pages";
import classes from "./Header.module.css";

function Header() {
  return (
    <div>
      <div className={classes.dropdown}>
        <button className={classes.dropBtn}>Dropdown</button>
        <div className={classes.dropdownСontent}>
          <Link to={PATH.PRE_JUNIOR}> Pre-junior </Link>
          <Link to={PATH.JUNIOR}> junior </Link>
          <Link to={PATH.JUNIOR_PLUS}> junior+ </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
