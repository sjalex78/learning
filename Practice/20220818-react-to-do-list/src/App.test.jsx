import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  render(<App />);

  expect(screen.getByTestId("title")).toHaveTextContent("Awesome To Do App!");
});
