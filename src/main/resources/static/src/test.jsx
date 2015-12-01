import React, { Component } from "react";

class Test extends Component {
  render() {
    return(
      <div>
        This is a test
      </div>
    );
  }
}

export default function() {
  return React.createElement(Test);
};
