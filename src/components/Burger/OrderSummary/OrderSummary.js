import React from "react";
import Aux from "../../../higherOrderComponents/Auxilliary";
import classes from "./OrderSummary.css";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: "capitlize" }}>{ingKey}</span> :
        {props.ingredients[ingKey]}
      </li>
    );
  });

  return (
    <Aux>
      <div className={classes.OrderSummary}>
        <h3>Your Order</h3>
        <p>Your Order Consists of these ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>Proceed to Checkout?</p>
      </div>
    </Aux>
  );
};

export default orderSummary;
