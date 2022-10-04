import { screen } from "@testing-library/react";
import { LogoLink } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<LogoLink />", () => {
  it("should render text link", () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo!" />);

    const heading = screen.getByRole("heading");

    expect(heading.firstChild).toHaveAttribute("href", "#target");
  });

  it("should render image link", () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo!" srcImg="image.jpg" />
    );

    expect(screen.getByRole("img", { name: "Olá mundo!" })).toHaveAttribute(
      "src",
      "image.jpg"
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá mundo!" srcImg="image.jpg" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
