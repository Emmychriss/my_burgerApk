import React, { Component } from "react";

import Aux from "../../higherOrderComponents/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/Buildcontrols/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../higherOrderComponents/withErrorHandler/withErrorHandler";
import axiosInstance from "../../axios-orders";

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
    totalPrice: 1100, // least burger price amt
    purchasable: false,
    purchasing: false,
    loading: false,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((ingKey) => {
        return ingredients[ingKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({
      purchasable: sum > 0,
    });
  }

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

    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }

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

    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  purchaseCancel = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinue = () => {
    // alert("YOU CONTINUE THE PURCHASE");
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Nduka Emmanuel",
        address: {
          street: "Teststreet 1",
          zipcode: "2233334",
          country: "Nigeria",
        },
        email: "test@test.com",
        deliveryMethod: "shipping",
      },
    };
    axiosInstance
      .post("/orders.json", order)
      .then((response) =>
        this.setState({
          loading: false,
          purchasing: false,
        })
      )
      .catch((error) => this.setState({ loading: false, purchasing: false }));
  };

  render() {
    const disableInfoObj = {
      ...this.state.ingredients,
    };

    for (let ingKey in disableInfoObj) {
      disableInfoObj[ingKey] = disableInfoObj[ingKey] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCancel={this.purchaseCancel}
        purchaseContinue={this.purchaseContinue}
        totalPrice={this.state.totalPrice}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} closeModal={this.purchaseCancel}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdd={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabledOrNot={disableInfoObj}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axiosInstance);
