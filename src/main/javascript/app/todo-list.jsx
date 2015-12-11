import React, { Component } from "react";
import { connect } from "react-redux";
import { pushPath } from "redux-simple-router";
import { mockAction } from "app/actions";
import Link from "app/common/link";

class TodoList extends Component {
  constructor() {
    super();
    this.add = this.add.bind(this);
  }

  add(event) {
    event.preventDefault();
    this.props.dispatch(mockAction("test"));
  }

  render() {
    const { texts } = this.props
    return(
      <div>
        <div>
          <button onClick={this.add} type="button">Add</button>&nbsp;
          {texts.length.toString()}
        </div>
        <div>
          <Link href="/about">About this application</Link>
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

export default connect(mapProps)(TodoList);
