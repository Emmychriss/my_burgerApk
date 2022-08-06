import React from "react";

import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavItems from "../Nav_Items/Nav_Items";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle showSideDrawer={props.showSideDrawer} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  );
};

export default toolbar;
