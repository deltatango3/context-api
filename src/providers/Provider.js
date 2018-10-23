import React, { Component } from "react";

const Context = React.createContext();

class Provider extends Component {
  state = {
    husband: "David",
    wife: "Susan",
    dogs: ["Junior", "Mya"]
  };
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const MyContext = Context.Consumer;
export default Provider;
