import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./SocialFollow.module.css";

export default function SocialFollow() {
  return (
    <div className={classes.container}>
      <a href="https://www.youtube.com/watch?v=4HrQHBwG4ls">
        <FontAwesomeIcon
          icon={faYoutube}
          size="3x"
          className={classes["icon"]}
        />
      </a>
      <a href="https://www.facebook.com/papa.ginos/">
        <FontAwesomeIcon
          icon={faFacebook}
          size="3x"
          className={classes["icon"]}
        />
      </a>
      <a href="https://www.instagram.com/papaginos/">
        <FontAwesomeIcon
          icon={faInstagram}
          size="3x"
          className={classes["icon"]}
        />
      </a>
    </div>
  );
}
