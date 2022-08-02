import React from "react";

import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavItems from "../Nav_Items/Nav_Items";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        <NavItems />
      </nav>
    </header>
  );
};

export default toolbar;
