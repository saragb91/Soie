import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Butters from "./components/Butters";
import DetailsButters from "./components/DetailButters";
import Index from "./components/Index";
import Navigation from './components/Navbar'
import Map from './components/Map'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navigation />
      <Router>
        <Switch>
          <>
            <Route exact path="/" component={Index} />
            <Route path="/butters" component={Butters} />
            <Route
              exact
              path="/details/:id"
              component={(props) => <DetailsButters {...props} />}
            />
            <Route path= "/address" component={Map} />
          </>
        </Switch>
      </Router>
    </>
  );
}

export default App;
