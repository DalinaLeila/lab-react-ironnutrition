import React, { Component } from "react";
import "./App.css";
import FoodBox from "./FoodBox";
import Search from "./Search";
import foods from "./food.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      search: "",
      foodToday: []
    };
    this._handleClick = this._handleClick.bind(this);
    this._handleSearchChange = this._handleSearchChange.bind(this);
    this._totalCalories = this._totalCalories.bind(this);
  }

  _displayFoods() {
    return this.state.foods
      .filter(el => {
        if (el.name.toLowerCase().includes(this.state.search.toLowerCase())) {
          //checking if the search input is included in the name
          return true;
        }
        return false;
      })
      .map((el, index) => {
        //maping over the filtered food selection
        const mappedFood = (
          <FoodBox key={index} food={el} handleClick={this._handleClick} />
        );
        return mappedFood;
      });
  }

  render() {
    let mappedFoodToday = this.state.foodToday.map((el, i) => {
      let sumCalories =
        this.state.foodToday[i].quantity * this.state.foodToday[i].calories;
      return (
        <div>
          <li
            key={i}
            style={{
              color: this._displayColor(sumCalories)
            }}
          >
            {this.state.foodToday[i].quantity} {this.state.foodToday[i].name} ={" "}
            {sumCalories} cal
            <a href={this._deleteElement(i)}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/device-apps-settings/2048/Recycle_bin-512.png"
                width="25px;"
              />
            </a>
          </li>
        </div>
      );
    });

    return (
      <div className="container">
        <h1 className="title">Food Overview</h1>
        <Search handleSearchChange={this._handleSearchChange} />
        <br />
        <div className="columns">
          <div className="column">{this._displayFoods()}</div>
        </div>
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>{mappedFoodToday}</ul>
          <h3>
            <b>Total Calories: {this._totalCalories()} cal</b>
          </h3>
        </div>
      </div>
    );
  }

  _deleteElement(index) {
    console.log(index);
  }
  _displayColor(calories) {
    if (calories === 0) return "black";
    if (calories >= 255) return "red";
    return "green";
  }

  _totalCalories() {
    let calories = 0;
    this.state.foodToday.map((el, i) => {
      return (calories +=
        this.state.foodToday[i].quantity * this.state.foodToday[i].calories);
    });
    return calories;
  }

  _handleClick(food, quantity) {
    let foodToday = this.state.foodToday.slice();
    foodToday.push({ ...food, quantity }); //will add the whole food element and the new updated quantity by the user
    this.setState({
      foodToday
    });
  }

  _handleSearchChange(newValue) {
    this.setState({
      search: newValue
    });
  }
}

export default App;
