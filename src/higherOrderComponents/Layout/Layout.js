import React, { Component } from "react";

import Aux from "../Auxilliary";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  SideDrawerClose = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  sideDrawerShow = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar showSideDrawer={this.sideDrawerShow} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClose}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
