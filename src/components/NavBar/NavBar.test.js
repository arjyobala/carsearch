import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

test("Navbar has title", () => {
  render(
    <Router>
      <NavBar title="Car Search" />
    </Router>
  );
  expect(screen.getByTestId("required-navbar-title")).toHaveTextContent(
    "Car Search"
  );
});

test("Navbar has links", () => {
  render(
    <Router>
      <NavBar title="Car Search" />
    </Router>
  );
  expect(screen.getByTestId("required-navbar-links")).toBeInTheDocument();
});
