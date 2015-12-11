import React, { Component } from "react";
import { connect } from "react-redux";
import { pushPath } from "redux-simple-router";

class Link extends Component {
  constructor() {
    super();
    this.dispatchLink = this.dispatchLink.bind(this);
  }

  dispatchLink(event) {
    event.preventDefault();
    this.props.dispatch(pushPath(this.props.href));
  }

  render() {
    return (
      <a href={this.props.href} onClick={this.dispatchLink}>
        {this.props.children}
      </a>
    );
  }
}

export default connect((state) => ({}))(Link);
