import React, { Component } from "react";

const Context = React.createContext();

class Provider extends Component {
  state = {
    husband: "David",
    wife: "Susan",
    dogs: ["Junior", "Mya"],
    number: 1
  };
  addNumber = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          addNumber: () => this.addNumber()
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const MyContext = Context.Consumer;
export default Provider;
