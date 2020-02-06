import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "containers/Homepage";
import Category from "containers/Category";
import NotFound from "containers/NotFound";
import "styles/App.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/category" component={Category} />
        <Route path="/" exact component={Homepage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
