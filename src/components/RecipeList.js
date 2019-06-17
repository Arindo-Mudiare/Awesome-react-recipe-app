import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch />
        <div className="container my-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">Recipe List</h1>
            </div>
          </div>
          {/* end of title */}
          <div className="row">
            {recipes.map(recipe => {
              return <Recipe key={recipe.recipe_id} recipe={recipe} />;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
