import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContentCard from "./ContentCard";

test("Card has make data", () => {
  render(<ContentCard make="Honda" />);
  const element = screen.getByTestId("cardetails");
  expect(element).toHaveTextContent("Honda");
});
