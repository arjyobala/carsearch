import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

test("button has label", () => {
  render(<Button label="Button" />);
  expect(screen.getByTestId("button")).toHaveTextContent("Button");
});
