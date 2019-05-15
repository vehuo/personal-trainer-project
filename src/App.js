import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigator from "./components/Navigator";
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
              <Route exact path="/" component={Customers} />
              <Route path="/trainings" component={Trainings} />
              <Route path="/calendar" component={ShowCalendar} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
