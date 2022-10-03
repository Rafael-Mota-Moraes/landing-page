import { screen } from "@testing-library/react";
import { NavLinks } from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

import mock from "./mock";

describe("<NavLinks />", () => {
  it("should render links", () => {
    renderTheme(<NavLinks links={mock}>Children</NavLinks>);

    expect(screen.getAllByRole("link")).toHaveLength(mock.length);
  });

  it("should not render links", () => {
    renderTheme(<NavLinks>Children</NavLinks>);

    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it("should match snapshot", () => {
    renderTheme(<NavLinks links={mock}>Children</NavLinks>);

    expect(screen.queryAllByText("link")).toMatchSnapshot();
  });
});
