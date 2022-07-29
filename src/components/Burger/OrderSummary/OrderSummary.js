import React from "react";

import Aux from "../../../higherOrderComponents/Auxilliary";
import classes from "./OrderSummary.css";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}</span> <b>:</b>{" "}
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
        <p>
          <b>Total Price: {props.totalPrice.toFixed(2)}</b>
        </p>
        <p>Proceed to Checkout?</p>
        <Button clicked={props.purchaseCancel} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={props.purchaseContinue} btnType="Success">
          CONTINUE
        </Button>
      </div>
    </Aux>
  );
};

export default orderSummary;
