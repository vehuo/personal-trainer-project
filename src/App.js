import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./components/Home";
import Customers from "./components/Customers";
import Trainings from "./components/Trainings";
import ShowCalendar from "./components/ShowCalendar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigator />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/customers" component={Customers} />
              <Route path="/trainings" component={Trainings} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
        <ShowCalendar />
      </div>
    );
  }
}

export default App;
