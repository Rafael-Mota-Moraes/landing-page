import { screen } from "@testing-library/react";
import { TextComponent } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<TextComponent />", () => {
  it("should render text inside the component", () => {
    renderTheme(<TextComponent>Children</TextComponent>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });
});
