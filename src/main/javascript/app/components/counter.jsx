import React, { Component } from "react";
import { connect } from "react-redux";
import { pushPath } from "redux-simple-router";
import { add } from "app/actions";
import Link from "components/common/link";

class Counter extends Component {
  constructor() {
    super();
    this.add = this.add.bind(this);
  }

  add(event) {
    event.preventDefault();
    this.props.dispatch(add());
  }

  render() {
    const { count } = this.props
    return(
      <div>
        <div>
          <button onClick={this.add} type="button">Add</button>&nbsp;
          {count}
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
    count: state.count
  };
}

export default connect(mapProps)(Counter);
