import React from "react";

import burgerLogo from "../../assets/Images/burgerLogo.png";
import classes from "./Logo.css";

const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="myBurger"></img>
    </div>
  );
};

export default logo;
