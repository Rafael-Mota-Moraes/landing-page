import { screen } from "@testing-library/react";
import Home from "./index";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

test("renders learn react link", () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole("heading", {
    name: "Hello World!"
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: "blue"
  });
});
