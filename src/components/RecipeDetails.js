import React, { Component } from "react";
import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {},
      url: `https://www.food2fork.com/api/get?key=2bf095be9ec0130efebf39fadb9742c1&q&rId=${
        this.props.id
      }`
    };
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="btn btn-info">Recipe Details o</h1>
      </React.Fragment>
    );
  }
}
