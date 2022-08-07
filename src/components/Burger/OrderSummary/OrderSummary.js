import React, { Component } from "react";

import Aux from "../../../higherOrderComponents/Auxilliary";
import classes from "./OrderSummary.css";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("[OrderSummary.js] will update!");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (ingKey) => {
        return (
          <li key={ingKey}>
            <span style={{ textTransform: "capitalize" }}>{ingKey}</span>{" "}
            <b>:</b> {this.props.ingredients[ingKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <div className={classes.OrderSummary}>
          <h3>Your Order</h3>
          <p>Your Order Consists of these ingredients: </p>
          <ul>{ingredientSummary}</ul>
          <p>
            <b>Total Price: {this.props.totalPrice.toFixed(2)}</b>
          </p>
          <p>Proceed to Checkout?</p>
          <Button clicked={this.props.purchaseCancel} btnType="Danger">
            CANCEL
          </Button>
          <Button clicked={this.props.purchaseContinue} btnType="Success">
            CONTINUE
          </Button>
        </div>
      </Aux>
    );
  }
}

export default OrderSummary;
