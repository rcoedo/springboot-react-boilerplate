import React, { Component } from "react";
import Link from "components/common/link";

class Header extends Component {
  render() {
    return (
      <h1>
        <Link href="/">Spring MVC + Nashorn + React + Redux</Link>
      </h1>
    );
  }
}

export default Header;
