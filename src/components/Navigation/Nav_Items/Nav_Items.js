import React from "react";

import NavigationItem from "./Nav_item/Nav_item";
import classes from "./Nav_items.css";

const navItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/" >
        Contact Us
      </NavigationItem>
    </ul>
  );
};

export default navItems;
