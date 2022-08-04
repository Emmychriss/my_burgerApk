import React from "react";

import Logo from "../../Logo/Logo";
import NavItems from "../Nav_Items/Nav_Items";
import classes from "./SideDrawer.css";

const sideDrawer = () => {
  //...
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
