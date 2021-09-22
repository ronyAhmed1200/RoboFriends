import React from "react";
import CardList from "./../Components/CardList";
// import { robots } from "./robots";
import Searchbox from "./../Components/Searchbox";
import "./App.css";
import Scroll from "./../Components/Scroll";
import ErrorBoundary from "./../Components/ErrorBoundary";

class App extends React.Component {
  // to use state we have to use class, not fuction.
  constructor() {
    super();        // super() - to give constructor the using and access of this.state 
    this.state = {
      //using this because class is a object
      robots: [],
      searchField: "",
    };
    // console.log("constructor");
  }

  //One really useful way to use componentDidMount is for AJAX requests. So, imagine a situation where you want to get a list of Comments for an Article. After the component is created you may want to go retrieve the list of comments from the server and then display them to the user.

  //In practice, componentDidMount is the best place to put calls to fetch data, for two reasons: Using didMount makes it clear that data won't be loaded until after the initial render. This reminds you to set up initial state properly, so you don't end up with undefined state that causes errors.

  componentDidMount() {
    //comPonentDidMount is using here mainly to fetch api
    // this.setState({ robots: robots });
    // console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });

    // console.log(filteredRobots);
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // console.log("render");
    // if (this.state.robots.length === 0) {
    //   return <h1 className="tc f1">Loading</h1>;
    // } else {
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
        {/* We have to use 'this' keyword here, if it is an object. Otherwise If it is a function, then there is no need for 'this' keyword. */}
      </div>
    );
  }
}

export default App;
