import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";

const Navigator = () => {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            PERSONAL TRAINER APP{"  "}
            <NavLink
              variant="h6"
              style={{
                textDecoration: "none",
                paddingLeft: 100,
                color: "black"
              }}
              activeStyle={{ color: "blue", textDecoration: "none" }}
              exact
              to="/"
            >
              Customers
            </NavLink>{" "}
            <NavLink
              variant="h6"
              style={{
                textDecoration: "none",
                paddingLeft: 20,
                color: "black"
              }}
              activeStyle={{ color: "blue", textDecoration: "none" }}
              to="/trainings"
            >
              Trainings
            </NavLink>{" "}
            <NavLink
              variant="h6"
              style={{
                textDecoration: "none",
                paddingLeft: 20,
                color: "black"
              }}
              activeStyle={{ color: "blue", textDecoration: "none" }}
              to="/calendar"
            >
              Calendar
            </NavLink>{" "}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigator;
