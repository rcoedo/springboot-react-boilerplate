import React, { Component } from "react";
import Link from "components/common/link";
import Header from "components/header";
import Footer from "components/footer";

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
