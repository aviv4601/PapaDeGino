import React from "react";
import { NavLink } from "react-router-dom";
import Slideshow from "../UI/Slideshow";
import classes from "./Hompage.module.css";

const Homepage = () => {
  return (
    <div>
      <Slideshow></Slideshow>
      <NavLink to="./menu" className={classes.order}>
        Order Here
      </NavLink>
    </div>
  );
};

export default Homepage;
