import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Project from "./pages/Project";
import Main from "./pages/Main";

const Routes = () => {
  return (
    <Router>
      <Header />
      {/* / 이랑 home이랑 Main component 보여주기 */}
      <Route path="/" component={Main} exact />{" "}
      <Route path="/project" component={Project} />
    </Router>
  );
};

export default Routes;
