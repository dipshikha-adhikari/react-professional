import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders", () => {
  render(<App />);
  const el = screen.getByText("App");
  expect(el).toBeInTheDocument();
});
