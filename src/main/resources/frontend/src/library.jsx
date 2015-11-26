import React, { Component } from "react";
import { toJS } from "immutable";
import { connect } from "react-redux";
import { mockAction } from "js/mock/actions";

class Library extends Component {
  render() {
    const { dispatch, texts } = this.props;
    console.log(texts);
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
    texts: state.texts.toJS()
  };
}

export default connect(mapProps)(Library);
