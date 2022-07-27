import React from "react";
import classes from "./BuildControl.css";

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.ingLabel}</div>
      <button className={classes.Less} onClick={props.add}>
        More
      </button>
      <button
        className={classes.More}
        onClick={props.remove}
        disabled={props.disabled}
      >
        Less
      </button>
    </div>
  );
};

export default buildControl;
