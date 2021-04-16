import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Error } from "./pages/Error";
import Songs from "./pages/Songs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    (
      <Router>
        <Switch>
          <Route path="/songs">
            <Songs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    ) ?? <Error code={404} />
  );
}

export default App;
