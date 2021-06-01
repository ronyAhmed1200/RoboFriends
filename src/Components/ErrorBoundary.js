import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props); //here we need it to get access to this.props
    this.state = {
      hasError: false,
    };
  }

  //  componentDidCatch: This method is called when a component or any children component encounters some error during the React Component Lifecycle. This method allows us to handle the error boundaries of the application.
  componentDidCatch(error, info) {
    //it is to log the errors
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops.. this is not good.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
