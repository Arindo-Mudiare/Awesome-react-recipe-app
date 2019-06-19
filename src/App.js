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
      "https://www.food2fork.com/api/search?key=2bf095be9ec0130efebf39fadb9742c1",
    base_url:
      "https://www.food2fork.com/api/search?key=2bf095be9ec0130efebf39fadb9742c1",
    details_id: "8c0314",
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ""
  };

  // method for api call
  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return {
            error: "Sorry, your search no carry weight nwanne!!"
          };
        });
      } else {
        this.setState({
          recipes: jsonData.recipes
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // component lifecycle method 1
  componentDidMount() {
    this.getRecipes();
  }

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            key={this.state.recipes.recipe_id}
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />
        );
      case 0:
        return (
          <RecipeDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );
    }
  };

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };

  // search methods
  handleChange = e => {
    this.setState(
      {
        search: e.target.value
      },
      () => {
        // console.log(this.state.search);
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      () => {
        return {
          url: `${base_url}${query}${search}`,
          search: ""
        };
      },
      () => {
        this.getRecipes();
      }
    );
  };

  // Render method
  render() {
    // console.log(this.state.recipes);
    return <div className="App">{this.displayPage(this.state.pageIndex)}</div>;
  }
}

export default App;
