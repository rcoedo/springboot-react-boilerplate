import React, { Component } from "react";
import Link from "app/common/link";
import Header from "app/header";
import Footer from "app/footer";

export default class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
