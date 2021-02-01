import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={classes.nav}>
      <Link to="/">
        <div className={classes.ms}>Visitor Details</div>
      </Link>
      <Link to="/list">
        <div className={classes.ms}>Visitor List</div>
      </Link>
    </div>
  );
}
