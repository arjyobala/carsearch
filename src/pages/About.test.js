import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";

test("header is rendered", () => {
  render(<About />);
  const element = screen.getByTestId("required-header");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Contents");
});

test("Name is rendered", () => {
  render(<About />);
  const element = screen.getByTestId("required-name");
  expect(element).toHaveTextContent("Demo app by Arjyo");
});

test("ul content is rendered", () => {
  render(<About />);
  const element = screen.getByTestId("required-content");
  expect(element).toBeInTheDocument();
  expect(element).toHaveStyle("margin : auto");
});

// test("Button is present", async () => {
//   render(<About  />);
//   const element = screen.getByTestId("button");
//   expect(element).toBeInTheDocument();
// });

// test("Button click", async () => {
//   render(<About  />);
//   global.alert = jest.fn();
//   fireEvent.click(screen.getByTestId("button"));
//   expect(global.alert).toHaveBeenCalledTimes(1);
// });
