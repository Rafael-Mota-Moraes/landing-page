import { screen } from "@testing-library/react";
import Home from "./index";
import { renderTheme } from "../../styles/render-theme";

describe("<Home />", () => {
  it("should render home", () => {
    const { debug } = renderTheme(<Home />);
  });
});
