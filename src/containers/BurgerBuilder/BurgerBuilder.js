import React, { Component } from "react";

import Aux from "../../higherOrderComponents/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/Buildcontrols/BuildControls";

const INGREDIENT_PRICES = {
  Cheese: 220,
  Bacon: 250,
  Salad: 280,
  Meat: 300,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Cheese: 0,
      Bacon: 0,
      Salad: 0,
      Meat: 0,
    },
    totalPrice: 1100,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdd={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
