import { render, screen } from "@testing-library/react";
import App from "./App";

test("render a page title", () => {
  render(<App />);
  const formTitle = screen.queryByText("Feedback form");
  expect(formTitle).toBeVisible();
});
