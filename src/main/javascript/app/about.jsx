import React, { Component } from "react";
import Link from "app/common/link";

class About extends Component {
  render() {
    return(
      <div>
        <h2>About this application</h2>
        <p>
          This is an example application featuring a server side rendering capable backend built with Spring MVC and Nashorn.
          For the frontend I'm using React + Redux with redux-simple-router.
        </p>
        <div>
          <Link href="/">Go back</Link>
        </div>
      </div>
    );
  }
}

export default About;
