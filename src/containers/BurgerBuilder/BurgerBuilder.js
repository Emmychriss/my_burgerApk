import React, { Component } from "react";

import Aux from "../../higherOrderComponents/Auxilliary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Cheese: 1,
      Bacon: 1,
      Salad: 2,
      Meat: 1,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
