import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { ingLabel: "cheese", type: "Cheese" },
  { ingLabel: "bacon", type: "Bacon" },
  { ingLabel: "salad", type: "Salad" },
  { ingLabel: "meat", type: "Meat" },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.ingLabel}
            ingLabel={ctrl.ingLabel}
            add={() => props.ingredientAdd(ctrl.type)}
            remove={() => props.ingredientRemove(ctrl.type)}
            disabled = {props.disabledOrNot[ctrl.type]}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
