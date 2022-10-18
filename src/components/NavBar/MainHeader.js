import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import logo from "../../assets/logo.png";
import SocialFollow from "../../UI/SocialFollow";
import { useState } from "react";

const MainHeader = () => {
  const [isToggled,setIsToggled] = useState(false);
  const onToggleHandler = (event) =>{
    setIsToggled(!isToggled);
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">
          <img src={logo} alt="gino logo"></img>
        </NavLink>
      </div>
      <div className={!isToggled ? classes.nav : classes.navIsToggled}>
        <ul>
          <li key={"order"} className={classes.li}>
            <NavLink
              to="/order"
              className={(navdata) => (navdata.isActive ? classes.active : "")}
            >
              My Orders
            </NavLink>
          </li>
          <li key={"menu"}>
            <NavLink
              to="/menu"
              className={(navdata) => (navdata.isActive ? classes.active : "")}
            >
              Menu
            </NavLink>
          </li>
        </ul>
        <SocialFollow></SocialFollow>
      </div>
      <div className={classes["menu"]} onClick={onToggleHandler}>
        <div className={classes["menu-line"]}></div>
        <div className={classes["menu-line"]}></div>
        <div className={classes["menu-line"]}></div>
      </div>
    </header>
  );
};

export default MainHeader;
