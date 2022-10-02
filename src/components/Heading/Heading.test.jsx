import { screen } from "@storybook/testing-library";
import Heading from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

describe("<Heading />", () => {
  it("should render with default values", () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      "font-size": theme.font.sizes.xhuge,
      "text-transform": "none"
    });
  });

  it("should render with white color", () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.white
    });
  });

  it("should render with correct heading sizes", () => {
    renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "font-size": theme.font.sizes.medium
    });
  });

  it("should render correct font sizes when using mobile", () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyleRule(
      "font-size",
      theme.font.sizes.xlarge,
      {
        media: theme.media.ltemedium
      }
    );
  });

  it("should render with uppercase letters", () => {
    renderTheme(<Heading uppercase>texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "text-transform": "uppercase"
    });
  });

  it("should render correct heading element", () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });
    const h6 = container.querySelector("h6");

    expect(h6.tagName.toLowerCase()).toBe("h6");
  });
});
