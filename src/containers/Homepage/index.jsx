import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <div className="homepage">
    <h1>Homepage</h1>
    <ul>
      <li>
        <Link to="/">Homepage</Link>
      </li>
      <li>
        <Link to="/category">Category</Link>
      </li>
      <li>
        <Link to="/oops-this-is-not-a-route">Not Found</Link>
      </li>
    </ul>
  </div>
);

export default Homepage;
