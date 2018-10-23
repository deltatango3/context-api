import React, { Component } from "react";
import People from "../people/People";
import Provider from "../../providers/Provider";

class Family extends Component {
  render() {
    return (
      <Provider>
        <People />
      </Provider>
    );
  }
}

export default Family;
