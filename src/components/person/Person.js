import React from "react";
import { MyContext } from "../../providers/Provider";

const Person = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <React.Fragment>
          <p>{context.state.husband}</p>
          <p>{context.state.wife}</p>
          {context.state.dogs.map(dog => {
            return <p>{dog}</p>;
          })}
          <p>{context.state.number}</p>
          <button onClick={context.addNumber}>Add Age</button>
        </React.Fragment>
      )}
    </MyContext.Consumer>
  );
};

export default Person;
