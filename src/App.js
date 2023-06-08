import React from "react";
import { Router, Route } from "react-router-dom";
import Greeting from "./components/Greeting";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Greeting} />
    </Router>
  );
};

export default App;
