import React, { Component } from "react";
import { toJS } from "immutable";
import { connect } from "react-redux";
import { mockAction } from "app/actions";

class App extends Component {
  render() {
    const { dispatch, texts } = this.props;
    return(
      <div>
        <div>
            {texts.length.toString()}
        </div>
        <div>
          <a href="#" onClick={() => dispatch(mockAction("test"))}>click here</a>
        </div>
      </div>
    );
  }
}

function mapProps(state) {
  return {
    texts: state.texts
  };
}

export default connect(mapProps)(App);
