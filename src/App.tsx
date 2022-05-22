import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import publicRoutes from "./Routes/Routes";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, index) => (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={index}
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
