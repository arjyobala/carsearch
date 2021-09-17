import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

test("Navbar is rendered", () => {
  render(<Navbar />);
  const element = screen.getByTestId("required-navbar");
  expect(element).toBeInTheDocument();
});
