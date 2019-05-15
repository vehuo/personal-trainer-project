import React from "react";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Link to="/calendar">Calendar</Link>{" "}
      <Link to="/customers">Customers</Link>{" "}
      <Link to="/trainings">Trainings</Link>{" "}
    </div>
  );
};

export default Navigator;
