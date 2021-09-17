import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";

test("header is rendered", () => {
  render(<About heading="About this demo" />);
  const element = screen.getByTestId("required-header");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("About this demo");
});

test("Name is present", () => {
  render(<About demoby="Max" />);
  const element = screen.getByTestId("name-2");
  expect(element).toHaveTextContent("Max");
  expect(element).toBeInTheDocument();
});

// test("Button is present", async () => {
//   render(<About demoby="Max" />);
//   const element = screen.getByTestId("button");
//   expect(element).toBeInTheDocument();
// });

// test("Button click", async () => {
//   render(<About demoby="Max" />);
//   global.alert = jest.fn();
//   fireEvent.click(screen.getByTestId("button"));
//   expect(global.alert).toHaveBeenCalledTimes(1);
// });
