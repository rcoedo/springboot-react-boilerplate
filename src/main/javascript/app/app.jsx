import React, { Component } from "react";
import { mockAction } from "app/actions";


    //const { dispatch, texts } = this.props;
//        <div>
//            {texts.length.toString()}
//        </div>
//        <div>
//          <a href="#" onClick={() => dispatch(mockAction("test"))}>click here</a>
//        </div>

export default class App extends Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}
