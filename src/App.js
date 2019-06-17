import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends Component {
  // Application state
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=2bf095be9ec0130efebf39fadb9742c1&q=chicken%20breast&page=2",
    details_id: "8c0314"
  };

  // method for api call
  // async getRecipes() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipes: jsonData.recipes
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // component lifecycle method 1
  componentDidMount() {
    // this.getRecipes();
  }

  // Render method
  render() {
    // console.log(this.state.recipes);
    return (
      <div className="App">
        {/* <i className="fas fa-thumbs-up fa-5x" /> */}
        {/* <RecipeList recipes={this.state.recipes} /> */}
        <RecipeDetails id={this.state.details_id} />
      </div>
    );
  }
}

export default App;
