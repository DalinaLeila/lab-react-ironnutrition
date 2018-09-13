import React, { Component } from "react";

class FoodBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
  }

  handleChange(event) {
    let userInput = event.target.value;
    this.setState({ quantity: userInput });
  }

  render() {
    const ratio = this.props.food.calories / 750;
    const red = parseInt(ratio * 255);
    const green = 255 - parseInt(ratio * 255);

    return (
      <div
        className="box"
        style={{ backgroundColor: `rgba(${red}, ${green}, 25, 0.5)` }}
      >
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={event => {
                    this.handleChange(event);
                  }}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() =>
                    this.props.handleClick(this.props.food, this.state.quantity)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
